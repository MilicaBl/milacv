import { useParams } from "react-router-dom";
import { projects } from "../../src/data/ProjectData";
import "../styles/Project.css";
import React, { useState, useEffect } from "react";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Keyboard-navigation för att stänga modalen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-container">
      <a href="/" className="back-btn">
        <span className="material-symbols-outlined">arrow_back</span>
      </a>
      <h3>{project.title}</h3>
      <img src={project.img} alt={project.title} className="main-image" />
      <p>{project.description}</p>

      {project.keyFeatures && (
        <div className="key-features">
          <h4>Key Features:</h4>
          <ul>
            {project.keyFeatures?.map((value, index) => (
              <li key={index}>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="gallery">
          {project.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} image ${index + 1}`}
              className="gallery-img"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      )}
      {project.technologies && (
        <div className="technologies">
          <h4>Technologies Used:</h4>
          <ul>
            {project.technologies?.map((value, index) => (
              <li key={index}>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Visit the project
        </a>
      )}
      {project.video && (
        <div className="video">
          <video controls autoPlay loop muted>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
            <button
              onClick={() => setSelectedImage(null)}
              className="close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
