import { useState } from "react";
import "./CertificateSlider.css";

import cert1 from "../assets/Certificate 1_page-0001.jpg";
import cert2 from "../assets/Certificate 2_page-0001.jpg";
import cert3 from "../assets/Certificate 3_page-0001.jpg";
import cert4 from "../assets/Certificate 4_page-0001.jpg";
import cert5 from "../assets/Certificate 5_page-0001.jpg";
import cert6 from "../assets/Certificate 6_page-0001.jpg";
import cert7 from "../assets/Certificate 7_page-0001.jpg";

const certificates = [
  { id: 1, title: "Foundations: Data, Data, Everywhere", img: cert1 },
  { id: 2, title: "Ask Questions to Make Data-Driven Decisions", img: cert2 },
  { id: 3, title: "Prepare Data for Exploration", img: cert3 },
  { id: 4, title: "Process Data from Dirty to Clean", img: cert4 },
  { id: 5, title: "Analyze Data to Answer Questions", img: cert5 },
  { id: 6, title: "Share Data Through Visualization", img: cert6 },
  { id: 7, title: "Data Analysis with R Programming", img: cert7 },
];

const CertificateSlider = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const next = () => {
    if (index < certificates.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left" onClick={prev}>
        &#10094;
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 33.33}%)` }}
        >
          {certificates.map((cert) => (
            <div className="carousel-card" key={cert.id}>
              <img src={cert.img} alt={cert.title} />
              <h4>{cert.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <button className="nav-btn right" onClick={next}>
        &#10095;
      </button>
    </div>
  );
};

export default CertificateSlider;
