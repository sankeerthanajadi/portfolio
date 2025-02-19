import React, { useState } from "react";
import "./art_App.css";
import A1 from "./art1.jpg";
import A2 from "./art2.jpg";
import A3 from "./art3.jpg";
import A4 from "./art4.jpg";
import A5 from "./art5.jpg";
import A6 from "./art6.jpg";
import A7 from "./art7.jpg";
import A8 from "./art8.png";
import A9 from "./art9.png";
import A10 from "./art10.png";

const App = () => {
  // Array of images with custom sizes
  const artworkData = [
    { src: A1, width: "250px", height: "400px" }, 
     
    { src: A3, width: "450px", height: "400px" },
    { src: A4, width: "250px", height: "400px" },
    { src: A5, width: "400px", height: "350px" }, 
    { src: A2, width: "250px", height: "300px" },
    { src: A6, width: "280px", height: "400px" },
    { src: A8, width: "270px", height: "450px" },
    // { src: A9, width: "250px", height: "400px" },
    // { src: A10, width: "250px", height: "600px" },
    { src: A7, width: "430px", height: "600px" },
    
  ];

  // State for modal
  const [modalImage, setModalImage] = useState(null);
  const [modalDimensions, setModalDimensions] = useState({});

  // Open modal with clicked image
  const openModal = (src, width, height) => {
    console.log("Opening modal with:", src, width, height);
    setModalImage(src);
    setModalDimensions({ width, height });
  };

  // Close modal
  const closeModal = () => {
    setModalImage(null);
    setModalDimensions({});
  };

  return (
    <div>
      {/* Header Section */}
      <header className="gallery-header">
        <div className="line"></div>
        <h1 className="gallery-title">My Art</h1>
        <div className="line"></div>
      </header>

      {/* Art Gallery Grid */}
      <div className="art-gallery">
        {artworkData.map((art, index) => (
          <div
            className="art-item"
            key={index}
            style={{
              width: art.width,
              height: art.height,
            }}
            onClick={() => {
              console.log("Image clicked:", art.src);
              openModal(art.src, art.width, art.height)}} // Open modal with image dimensions
          >
            <img src={art.src} alt={`Artwork ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            style={{
              width: modalDimensions.width,
              height: modalDimensions.height,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Enlarged Art"
              style={{
                width: modalDimensions.width,
                height: modalDimensions.height,
                objectFit: "contain", // Ensure the image fits without distortion
              }}
            />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
