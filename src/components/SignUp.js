import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  function submit(e) {
    e.preventDefault();
    setAccept(true);
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
