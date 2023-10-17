import axios from "axios";
import { useEffect, useState } from "react";

function MainForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(0);
  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);
  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name.length < 2 || password.length < 8 || passwordR !== password) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        const res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoint}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          }
        );
        if (res.status === 200) {
          props.setLocalStorage && window.localStorage.setItem("email", email);
          window.location.pathname = `/${props.to}`;
        }
      }
    } catch (err) {
      props.emailError && setEmailError(err.response.status);
    }
  }
  return (
    <div className="sign-up">
      <form onSubmit={submit}>
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
        {emailError === 422 && accept && <p>Email Is Already Been Taken</p>}
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
          {props.button}
        </button>
      </form>
    </div>
  );
}

export default MainForm;
