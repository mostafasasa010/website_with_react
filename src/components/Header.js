import { Link } from "react-router-dom";

function Header() {
  function handelLogOut() {
    window.localStorage.removeItem("email");
    window.location.reload();
  }
  function handelClick() {
    document.querySelector(".bx.bx-menu").classList.toggle("bx-x");
    document.querySelector(".ul-i").classList.toggle("active");
  }
  return (
    <>
      <nav className="nav">
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
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
              <div className="btns">
                {!window.localStorage.getItem("email") ? (
                  <>
                    <Link to="/login" className="btn">
                      Log In
                    </Link>
                    <Link to="/register" className="btn">
                      Register
                    </Link>
                  </>
                ) : (
                  <Link to="/" className="btn" onClick={handelLogOut}>
                    Log Out
                  </Link>
                )}
              </div>
              <i class="bx bx-menu menu" onClick={handelClick}></i>
            </div>
          </div>
        </div>
      </nav>
      <ul className="ul-i">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
