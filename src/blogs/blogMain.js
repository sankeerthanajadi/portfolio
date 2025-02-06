import React from 'react';
import Exoplanets from './Picture.jpg'
import Graph from './graphs.jpg'
import Sun from './sun from space.jpg'

const images = [
  { src: Sun , desc: 'Secrets of sun: Have ever wondered what is the true colour of sun! Is it Orange, Yellow or Indigo, Lets see those true colours',link: `${process.env.PUBLIC_URL}/sun.html` },
  { src: Exoplanets, desc: 'Exoplanet detection using Machine Learning: Out on planets hunt with ML is pretty interesting', link: `${process.env.PUBLIC_URL}/exoplanet.html` },
  { src: Graph, desc: 'Four colour theorem: Can we colour any map in just 4 colours, Lets find out with one of the most important theorem of histroy that created Graph Theory', link: `${process.env.PUBLIC_URL}/four_colour.html`  },
];

export default function BlogMain() {
  return (
    <div className="container my-4">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={`Image ${index + 1}`} 
              className="img-fluid rounded-0" 
               style={{border: '2px solid black', width: '400px', height: '250px' }} 
               />
            </a>
            <p className="mt-2" style={{ fontSize: '20px', fontWeight: 'bold' }}>{image.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

