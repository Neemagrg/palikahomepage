import { useState } from "react";

function Navbar() {

  const [active, setActive] = useState("गृहपृष्ठ");

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <div className="brand">

          <img
            src="/images/logo.png"
            alt="बेलबारी नगरपालिका"
            className="logo"
          />

          <div className="brand-text">

            <h1>बेलबारी नगरपालिक</h1>

            <p>पर्यटकीय क्षेत्र</p>

          </div>

        </div>


        {/* Navigation */}
        <div className="navigation">

          <button
            className={active === "गृहपृष्ठ" ? "nav-link active" : "nav-link"}
            onClick={() => setActive("गृहपृष्ठ")}
          >
            गृहपृष्ठ
          </button>

          <button
            className={active === "पर्यटकीय क्षेत्र" ? "nav-link active" : "nav-link"}
            onClick={() => setActive("पर्यटकीय क्षेत्र")}
          >
            पर्यटकीय क्षेत्र
          </button>

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