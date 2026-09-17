import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Tourism() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("सबै स्थल");

  // Tourism places
  const places = [
    {
      id: 1,
      category: "ऐतिहासिक",
      title: "धनपालगढी पर्यटकीय क्षेत्र",
      englishTitle: "Dhanpalgadhi Tourism Area",
      location: "कसेनी, बेलबारी, मोरङ",
      description:
        "बेलबारीको कसेनीमा रहेको धनपालगढी ऐतिहासिक तथा पर्यटकीय महत्व बोकेको क्षेत्र हो।",
      coordinate: "H9XW+32H",
      image: "/images/photo3.jpg",
    },

    {
      id: 2,
      category: "प्राकृतिक",
      title: "बेतना सिमसार",
      englishTitle: "Betana Wetland",
      location: "बेलबारी, मोरङ",
      description:
        "बेलबारीको प्रसिद्ध प्राकृतिक सिमसार क्षेत्र, जहाँ विभिन्न वनस्पति तथा चराचुरुङ्गी अवलोकन गर्न सकिन्छ।",
      coordinate: "Belbari, Morang",
      image: "/images/photo2.jpg",
    },

    {
      id: 3,
      category: "धार्मिक",
      title: "काली मन्दिर",
      englishTitle: "Kali Temple",
      location: "बेलबारी, मोरङ",
      description:
        "स्थानीय धार्मिक तथा सांस्कृतिक महत्व बोकेको काली मन्दिर बेलबारीको महत्वपूर्ण धार्मिक स्थल हो।",
      coordinate: "Belbari, Morang",
      image: "/images/photo1.png",
    },
  ];

  // Category counts
  const historicalCount = places.filter(
    (place) => place.category === "ऐतिहासिक"
  ).length;

  const naturalCount = places.filter(
    (place) => place.category === "प्राकृतिक"
  ).length;

  const religiousCount = places.filter(
    (place) => place.category === "धार्मिक"
  ).length;

  // Search + category filtering
  const filteredPlaces = places.filter((place) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      place.title.toLowerCase().includes(searchText) ||
      place.englishTitle.toLowerCase().includes(searchText) ||
      place.location.toLowerCase().includes(searchText) ||
      place.category.toLowerCase().includes(searchText);

    const matchesCategory =
      activeTab === "सबै स्थल" ||
      place.category === activeTab;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="tourism-page">

      <TopBar />

      <Navbar />

      {/* ==============================
          HERO
      ============================== */}

      <section className="tourism-hero">

        <div className="tourism-hero-inner">

          {/* Breadcrumb */}
          <div className="tourism-breadcrumb">
            <span>गृहपृष्ठ</span>
            <span>/</span>
            <span>पर्यटकीय क्षेत्रहरू</span>
          </div>

          {/* Heading */}
          <h1>पर्यटकीय क्षेत्रहरू</h1>

          <p className="tourism-description">
            हाम्रो क्षेत्रका प्राकृतिक, धार्मिक, ऐतिहासिक र सांस्कृतिक
            सम्पदाहरू अन्वेषण गर्नुहोस्
          </p>

          {/* Statistics */}
          <div className="tourism-stats">

            <div className="stat-box">
              <strong>{places.length}</strong>
              <span>कुल स्थलहरू</span>
            </div>

            <div className="stat-box">
              <strong>{historicalCount}</strong>
              <span>ऐतिहासिक</span>
            </div>

            <div className="stat-box">
              <strong>{naturalCount}</strong>
              <span>प्राकृतिक</span>
            </div>

            <div className="stat-box">
              <strong>{religiousCount}</strong>
              <span>धार्मिक</span>
            </div>

          </div>

          {/* Search */}
          <div className="tourism-search">

            <span className="tourism-search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="स्थलको नाम, जिल्ला वा टोल खोज्नुहोस्..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>

        </div>

      </section>


      {/* ==============================
          CATEGORY TABS
      ============================== */}

      <div className="tourism-tabs-wrapper">

        <div className="tourism-tabs">

          <button
            className={
              activeTab === "सबै स्थल"
                ? "tourism-tab active"
                : "tourism-tab"
            }
            onClick={() => setActiveTab("सबै स्थल")}
          >
            सबै स्थल
            <span>{places.length}</span>
          </button>


          <button
            className={
              activeTab === "ऐतिहासिक"
                ? "tourism-tab active"
                : "tourism-tab"
            }
            onClick={() => setActiveTab("ऐतिहासिक")}
          >
            ऐतिहासिक
            <span>{historicalCount}</span>
          </button>


          <button
            className={
              activeTab === "प्राकृतिक"
                ? "tourism-tab active"
                : "tourism-tab"
            }
            onClick={() => setActiveTab("प्राकृतिक")}
          >
            प्राकृतिक
            <span>{naturalCount}</span>
          </button>


          <button
            className={
              activeTab === "धार्मिक"
                ? "tourism-tab active"
                : "tourism-tab"
            }
            onClick={() => setActiveTab("धार्मिक")}
          >
            धार्मिक
            <span>{religiousCount}</span>
          </button>

        </div>

      </div>


      {/* ==============================
          TOURISM CONTENT
      ============================== */}

      <main className="tourism-content">

        <div className="tourism-section-heading">

          <h2>
            <span></span>
            सबै पर्यटकीय क्षेत्रहरू
          </h2>

          <div className="place-count">
            {filteredPlaces.length} स्थल
          </div>

        </div>


        {/* Cards */}

        {filteredPlaces.length > 0 ? (

          <div className="tourism-grid">

            {filteredPlaces.map((place) => (

              <article
                className="tourism-card"
                key={place.id}
              >

                {/* Image */}
                <div className="tourism-card-image">

                  <img
                    src={place.image}
                    alt={place.title}
                  />

                  <div className="tourism-category">
                    {place.category}
                  </div>

                </div>


                {/* Body */}
                <div className="tourism-card-body">

                  <h3>
                    {place.title}
                  </h3>

                  <p className="english-title">
                    {place.englishTitle}
                  </p>


                  <p className="tourism-location">
                    <span>●</span>
                    {place.location}
                  </p>


                  <p className="tourism-card-description">
                    {place.description}
                  </p>


                  <div className="coordinate">
                    {place.coordinate}
                  </div>


                  <div className="card-divider"></div>


                  <button className="details-button">
                    विस्तृत जानकारी
                    <span>›</span>
                  </button>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div className="no-results-icon">
              🔍
            </div>

            <h3>
              पर्यटकीय स्थल भेटिएन
            </h3>

            <p>
              तपाईंले खोज्नुभएको स्थल फेला परेन।
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveTab("सबै स्थल");
              }}
            >
              सबै स्थलहरू हेर्नुहोस्
            </button>

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
}

export default Tourism;