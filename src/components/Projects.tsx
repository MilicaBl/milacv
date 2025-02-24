import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";

interface Image {
  id: number;
  src: string;
  alt: string;
  link: string;
}
const images: Image[] = [
  { id: 1, src: "/images/mockup1.jpeg", alt: "Mockup 1", link: "/project/1" },
  { id: 2, src: "/images/mockup3.jpeg", alt: "Mockup 2", link: "/project/2" },
  { id: 3, src: "/images/mockup2.jpeg", alt: "Mockup 3", link: "/project/3" },
  { id: 4, src: "/images/mockup4.jpeg", alt: "Mockup 4", link: "/project/4" },
];
const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Hantera sliderändring
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentIndex(Number(event.target.value));
  };

  return (
    <>
      <h3>Selected Work</h3>
      <div id="projects" className="carousel">
        <div className="carousel-images">
          {images.map((image, index) => {
            const position =
              index === currentIndex
                ? "center"
                : index === (currentIndex - 1 + images.length) % images.length
                ? "left"
                : index === (currentIndex + 1) % images.length
                ? "right"
                : "hidden";

            return (
              <Link
                key={image.id}
                to={image.link}
                className={`carousel-link ${position}`} // Lägg till en klass för länken
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`carousel-image ${position}`}
                />
              </Link>
            );
          })}
        </div>
        <input
          type="range"
          min="0"
          max={images.length - 1}
          value={currentIndex}
          onChange={handleSliderChange}
          className="carousel-slider"
        />
      </div>
    </>
  );
};
export default Projects;
