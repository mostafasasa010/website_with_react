import { Link } from "react-router-dom";

function DashHeader() {
  function handelClick() {
    document.querySelector(".bx.bx-menu").classList.toggle("bx-x");
    document.querySelector(".ul-i").classList.toggle("active");
  }
  return (
    <>
      <nav className="nav nav-dash">
        <div className="container">
          <div>
            <Link to="/">
              <img src={require("../imgs/logo.png")} alt="Logo" />
            </Link>
            <div className="right">
              <ul className="ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <i className="bx bx-menu menu" onClick={handelClick}></i>
          </div>
        </div>
      </nav>
      <ul className="ul-i">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
}

export default DashHeader;
