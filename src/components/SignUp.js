import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  function submit(e) {
    e.preventDefault();
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
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email ..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          placeholder="Your Password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="repeat">Repeat Password: </label>
        <input
          id="repeat"
          type="password"
          placeholder="Repeat Password ..."
          value={passwordR}
          onChange={(e) => setPasswordR(e.target.value)}
        />
        <label></label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
