import { NavLink } from "react-router-dom";

function DashSide() {
  function handelGear() {
    document.querySelector(".bx.bxs-cog").classList.toggle("bx-spin");
    document.querySelector(".dash-side").classList.toggle("active");
  }
  return (
    <div className="dash-side">
      <div onClick={handelGear}>
        <i className="bx bxs-cog"></i>
      </div>
      <ul>
        <li>
          <NavLink activeclassname="active" to="/dashboard/users">
            <div>
              <i className="bx bxs-user"></i>
              <span>Users</span>
            </div>
            <i className="bx bx-right-arrow-alt"></i>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/dashboard/user/create">
            <div>
              <i className="bx bxs-user-plus"></i>
              <span>New User</span>
            </div>
            <i className="bx bx-right-arrow-alt"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashSide;
