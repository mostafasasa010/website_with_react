import { Link } from "react-router-dom";

function Header() {
  function handelLogOut() {
    window.localStorage.removeItem("email");
    window.location.reload();
  }
  return (
    <nav className="nav">
      <div className="container">
        <div>
          <Link to="/">
            <img src={require("../imgs/logo.png")} alt="Logo" />
          </Link>
          <div className="right">
            <ul>
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
