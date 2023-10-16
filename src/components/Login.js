import axios from "axios";
import { useState } from "react";
import Header from "./Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(0);
  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        const res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }
  return (
    <>
      <Header />
      <div className="sign-up">
        <form onSubmit={submit}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email === "" && accept && <p>Email Is Required</p>}
          {emailError === 401 && accept && <p>The Email Is Wrong</p>}
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
        </form>
      </div>
    </>
  );
}

export default Login;
