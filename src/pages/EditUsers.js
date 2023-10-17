import { useEffect, useState } from "react";
import MainForm from "../components/MainForm";

function EditUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);
  return (
    <MainForm
      button="Update"
      endPoint={`user/update/${id}`}
      setLocalStorage={false}
      to="dashboard/users"
      name={name}
      email={email}
      emailError={false}
    />
  );
}

export default EditUsers;
