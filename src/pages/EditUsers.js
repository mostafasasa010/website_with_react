import axios from "axios";
import { useEffect, useState } from "react";

function EditUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);
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
          `http://127.0.0.1:8000/api/user/update/${id}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          }
        );
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/dashboard/users";
        }
      }
    } catch (err) {}
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
        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUsers;
