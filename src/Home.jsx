import { useEffect, useState } from "react";
import hospitalFurniture from "./data/json/hospitalFurniture.json";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [heroImage, setHeroImage] = useState("");
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    let lastIndex = -1;

    const changeImage = () => {
      let newIndex;

      do {
        newIndex = Math.floor(
          Math.random() * hospitalFurniture.length
        );
      } while (
        hospitalFurniture.length > 1 &&
        newIndex === lastIndex
      );

      lastIndex = newIndex;

      setHeroImage(
        `/images/${hospitalFurniture[newIndex].Image}`
      );

      setImageKey((prev) => prev + 1);
    };

    changeImage();

    const interval = setInterval(changeImage, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        {heroImage && (
          <img
            key={imageKey}
            src={heroImage}
            alt="GS Surgical"
            className="hero-image"
          />
        )}

        <div className="hero-overlay">
          <h1>GS Surgical</h1>
          <p>
            Premium Hospital Furniture, Operation Theatre Equipment,
            Surgical Instruments & Healthcare Solutions
          </p>
        </div>
      </div>
      
      <section className="featured-products">
  <h2>Featured Products</h2>

  <div className="featured-grid">
    {hospitalFurniture.slice(0, 8).map((product) => (
     <Link
  key={product.id}
  to={`/product/${product.id}`}
  className="featured-card"
>
  <img
    src={`/images/${product.Image}`}
    alt={product.name}
  />

  <h3>{product.name}</h3>

  <ul className="feature-list">
    {Object.entries(product.specifications || {})
      .slice(0, 3)
      .map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
  </ul>

  <span className="featured-btn">
    View Details
  </span>
</Link>
    ))}
  </div>
</section>
      {/* About Section */}
      <section className="about-section">
        <h2>About GS Surgical</h2>

        <p>
          GS Surgical is a trusted supplier of premium hospital
          furniture, operation theatre equipment, surgical
          instruments and healthcare solutions. We provide reliable,
          durable and innovative products for hospitals, clinics
          and healthcare professionals.
        </p>

        <p>
          Our product range includes Hospital Beds, OT Tables,
          Stretchers, Patient Trolleys, Doctor Stools,
          Examination Tables and various medical equipment
          designed to improve patient care and operational
          efficiency.
        </p>

        <h2>Our Vision</h2>

        <p>
          To become a leading provider of innovative and dependable
          healthcare products while helping hospitals and clinics
          deliver exceptional patient care.
        </p>
      </section>
    </div>
  );
}

export default Home;