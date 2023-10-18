import axios from "axios";
import { useContext, useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { User } from "../../context/Context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [Error, setError] = useState(false);
  const userN = useContext(User);
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/login`, {
        email: email,
        password: password,
      });
      const token = res.data.data.token;
      const userData = res.data.data.user;
      userN.setAuth({ token, userData });
      navigate("/dashboard");
    } catch (err) {
      if (err.response.status === 401) {
        setError(err.response.status);
      }
      setAccept(true);
    }
  }
  return (
    <>
      <Header />
      <div className="sign-up">
        <form onSubmit={submit}>
          <h2>Log In</h2>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email === "" && accept && <p>Email Is Required</p>}
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Your Password ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p>Password Must Greater Than 8 Char</p>
          )}
          <button type="submit" className="btn">
            Log In
          </button>
          {Error && accept && <p className="err">Wrong Password Or Email</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
