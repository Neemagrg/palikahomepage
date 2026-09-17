import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import Footer from "../components/Footer";

function Home() {

  return (
    <div className="website">

      <TopBar />

      <Navbar />

      <Hero />

      <main className="main-content">

        <section className="places-section">

          <div className="section-heading">

            <div>

              <h2>
                अवश्य हेर्नुपर्ने स्थलहरू
              </h2>

              <p>
                बेलबारी नगरपालिका को परिचय र इतिहासको उत्कृष्ट झलक दिने
                रोचक अनुभव र चर्चित स्थलहरू।
              </p>

            </div>

            <button className="view-all-btn">
              सबै स्थलहरू हेर्नुहोस्
            </button>

          </div>


          <div className="places-grid">

            {/* CARD 1 */}

            <DestinationCard
              image="/images/photo3.jpg"
              category="ऐतिहासिक"
              title="धनपालगढी पर्यटकीय क्षेत्र"
              description="बेलबारीको प्रसिद्ध ऐतिहासिक तथा पर्यटकीय क्षेत्र। यहाँ प्राकृतिक सुन्दरता र ऐतिहासिक महत्वको अनुभव गर्न सकिन्छ।"
            />


            {/* CARD 2 */}

            <DestinationCard
              image="/images/photo2.jpg"
              category="प्राकृतिक"
              title="बेतना सिमसार"
              description="बेलबारीको प्रमुख प्राकृतिक पर्यटकीय स्थल। विभिन्न वन्यजन्तु तथा चराचुरुङ्गी अवलोकन गर्न सकिन्छ।"
            />


            {/* CARD 3 */}

            <DestinationCard
              image="/images/photo1.png"
              category="धार्मिक"
              title="काली मन्दिर"
              description="बेलबारी क्षेत्रमा रहेको महत्वपूर्ण धार्मिक तथा सांस्कृतिक स्थल।"
            />

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;