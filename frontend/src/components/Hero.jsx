import { useState } from "react";

function Hero() {

  const [search, setSearch] = useState("");

  const categories = [
    "प्राकृतिक",
    "धार्मिक",
    "ऐतिहासिक",
    "सांस्कृतिक",
    "अन्य"
  ];

  const handleSearch = () => {

    if (!search.trim()) {
      alert("कृपया खोज्नुपर्ने स्थलको नाम लेख्नुहोस्।");
      return;
    }

    alert(`खोजी: ${search}`);
  };

  return (
    <section className="hero">

      <div className="hero-content">

        <p className="welcome">
          नमस्ते! स्वागत छ
        </p>

        <h2>
          बेलबारी नगरपालिका
        </h2>

        <p className="hero-description">
          हाम्रो नगरपालिकाका लुकेका सुन्दर स्थलहरू पत्ता लगाउनुहोस्।
          नेपालको मुटुभित्रको तपाईंको यात्रा यहींबाट सुरु हुन्छ।
        </p>


        {/* Search Box */}
        <div className="search-card">

          <h3>
            तपाईं कहाँ जान चाहनुहुन्छ?
          </h3>

          <div className="search-row">

            <div className="search-input-wrapper">

              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                placeholder="स्थल खोज्नुहोस्..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              खोज्नुहोस्
            </button>

          </div>


          <p className="category-title">
            द्रुत पहुँच
          </p>

          <div className="category-list">

            {categories.map((category) => (
              <button
                key={category}
                className="category-btn"
                onClick={() => setSearch(category)}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;