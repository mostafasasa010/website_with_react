import { useContext, useState } from "react";
import { User } from "../../context/Context";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const userN = useContext(User);
  const navigate = useNavigate();
  const cookie = new Cookies();
  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordR,
      });
      const token = res.data.data.token;
      cookie.set("Bearer", token);
      const userData = res.data.data.user;
      userN.setAuth({ token, userData });
      navigate("/dashboard");
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(err.response.status);
      }
      setAccept(true);
    }
  }
  return (
    <>
      <Header />
      <div className="sign-up">
        <form onSubmit={submit}>
          <h2>Sign Up</h2>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.length < 2 && accept && <p>Name Must Greater Than 1 Char</p>}
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email === "" && accept && <p>Email Is Required</p>}
          {emailError && accept && <p>Email Is Already Been Taken</p>}
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
          <label htmlFor="repeat">Repeat Password: </label>
          <input
            id="repeat"
            type="password"
            placeholder="Repeat Password ..."
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && <p>Password Must Be Matching</p>}
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
