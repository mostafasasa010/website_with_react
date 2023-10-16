import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [runEffect, setRunEffect] = useState(0);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [runEffect]);
  async function deleteUser(id) {
    await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    setRunEffect((pre) => pre + 1);
  }
  const showUsers = data.map((e, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>
          <Link to={`${e.id}`}>
            <i className="bx bxs-edit edit"></i>
          </Link>
          <i className="bx bxs-trash del" onClick={() => deleteUser(e.id)}></i>
        </td>
      </tr>
    );
  });
  return (
    <div className="users">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}

export default Users;
