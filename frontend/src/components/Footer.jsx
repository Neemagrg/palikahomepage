function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-about">

          <div className="footer-title">

            <div className="footer-logo">
              PT
            </div>

            <h3>
              पर्यटन पोर्टल
            </h3>

          </div>


          <p>
            नगरपालिकाको पर्यटकीय क्षेत्रहरूको आधिकारिक
            सूचना पोर्टल । यहाँ प्राकृतिक, धार्मिक, ऐतिहासिक र
            सांस्कृतिक स्थलहरूको विवरण पाउन सक्नुहुन्छ।
          </p>


          <div className="footer-location">
            <span>●</span>
            नेपाल
          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h4>
            द्रुत लिंक
          </h4>

          <div className="footer-line"></div>

          <a href="/tourism">
            › पर्यटकीय क्षेत्रहरू
          </a>

          <a href="/">
            › प्रशासन
          </a>

        </div>


        {/* Categories */}
        <div className="footer-column">

          <h4>
            क्षेत्रका प्रकार
          </h4>

          <div className="footer-line"></div>

          <a href="/tourism">
            › ऐतिहासिक
          </a>

        </div>


        {/* Information */}
        <div className="footer-column">

          <h4>
            जानकारी
          </h4>

          <div className="footer-line"></div>

          <a href="/">
            › नगरपालिका बारे
          </a>

          <a href="/">
            › सम्पर्क
          </a>

          <a href="/">
            › सहयोग
          </a>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 नगरपालिका व्यवस्थापन प्रणाली — सबै अधिकार सुरक्षित
          </p>

          <p>
            नेपाल सरकार
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;