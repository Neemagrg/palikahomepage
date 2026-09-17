import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo and Website Name */}
        <Link to="/" className="brand">

          <div className="logo-container">
            <img
              src="/images/logo.png"
              alt="बेलबारी नगरपालिका"
              className="logo"
            />
          </div>

          <div className="brand-text">
            <h1>बेलबारी नगरपालिका</h1>
            <p>पर्यटकीय क्षेत्र</p>
          </div>

        </Link>


        {/* Navigation */}
        <div className="navigation">

          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            गृहपृष्ठ
          </Link>

          <Link
            to="/tourism"
            className={
              location.pathname === "/tourism"
                ? "nav-link active"
                : "nav-link"
            }
          >
            पर्यटकीय क्षेत्र
          </Link>

        </div>


        {/* Login */}
        <button className="login-btn">
          लग इन
        </button>

      </div>

    </nav>
  );
}

export default Navbar;