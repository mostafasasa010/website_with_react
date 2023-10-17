import { Link } from "react-router-dom";

function DashSide() {
  function handelGear() {
    document.querySelector(".bx.bxs-cog").classList.toggle("bx-spin");
    document.querySelector(".dash-side").classList.toggle("active");
  }
  function handelLi(e) {
    let links = document.querySelectorAll(".dash-side ul li a");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  return (
    <div className="dash-side">
      <div onClick={handelGear}>
        <i className="bx bxs-cog"></i>
      </div>
      <ul>
        <li>
          <Link to="/dashboard/users" onClick={(e) => handelLi(e)}>
            <span>Users</span> <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashSide;
