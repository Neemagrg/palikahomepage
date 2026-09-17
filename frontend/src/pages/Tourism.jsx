import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

function Tourism() {

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("सबै स्थल");

  const places = [
    {
      category: "ऐतिहासिक",
      title: "धनपालगढी पर्यटकीय क्षेत्र",
      englishTitle: "Dhanpalgadhi Tourism Area",
      location: "कसेनी, बेलबारी, मोरङ",
      description:
        "बेलबारी । नेपाल सरकारको ९ सय पर्यटकीय गन्तव्यको सूचीमा रहेको मोरङको बेलबारी नगरपालिका ७ कसेनीमा पर्ने धनपालगढी...",
      image: "/images/destination.jpg"
    }
  ];

  const filteredPlaces = places.filter((place) => {

    const matchesSearch =
      place.title.includes(search) ||
      place.location.includes(search) ||
      place.category.includes(search);

    const matchesCategory =
      activeTab === "सबै स्थल" ||
      place.category === activeTab;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="tourism-page">

      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="tourism-hero">

        <div className="tourism-hero-inner">

          {/* Breadcrumb */}
          <div className="tourism-breadcrumb">
            <span>गृहपृष्ठ</span>
            <span>/</span>
            <span>पर्यटकीय क्षेत्रहरू</span>
          </div>

          {/* Heading */}
          <h1>
            पर्यटकीय क्षेत्रहरू
          </h1>

          <p className="tourism-description">
            हाम्रो क्षेत्रका प्राकृतिक, धार्मिक, ऐतिहासिक र सांस्कृतिक
            सम्पदाहरू अन्वेषण गर्नुहोस्
          </p>


          {/* Statistics */}
          <div className="tourism-stats">

            <div className="stat-box">

              <strong>
                1
              </strong>

              <span>
                कुल स्थलहरू
              </span>

            </div>


            <div className="stat-box">

              <strong>
                1
              </strong>

              <span>
                ऐतिहासिक
              </span>

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

          </div>

        </div>

      </section>


      {/* =========================
          CATEGORY TABS
      ========================== */}

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
            <span>1</span>
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
            <span>1</span>
          </button>

        </div>

      </div>


      {/* =========================
          PLACES SECTION
      ========================== */}

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

        <div className="tourism-grid">

          {filteredPlaces.length > 0 ? (

            filteredPlaces.map((place, index) => (

              <article
                className="tourism-card"
                key={index}
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


                {/* Card Body */}
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
                    H9XW+32H
                  </div>


                  <div className="card-divider"></div>


                  <button className="details-button">
                    विस्तृत जानकारी
                    <span>›</span>
                  </button>

                </div>

              </article>

            ))

          ) : (

            <div className="no-results">
              कुनै पर्यटकीय स्थल भेटिएन।
            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Tourism;