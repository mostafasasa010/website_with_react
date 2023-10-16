import { Link } from "react-router-dom";

function DashSide() {
  function HandelGear() {
    document.querySelector(".bx.bxs-cog").classList.toggle("bx-spin");
    document.querySelector(".dash-side").classList.toggle("active");
  }
  return (
    <div className="dash-side">
      <div onClick={HandelGear}>
        <i className="bx bxs-cog"></i>
      </div>
      <ul>
        <li>
          <Link to="/dashboard/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default DashSide;
