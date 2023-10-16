import { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const showUsers = data.map((e) => {
    return (
      <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
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
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}

export default Users;
