import React from 'react';
import Me from './mine1.png';  

export default function Photo() {
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    textAlign: 'center', 
    paddingLeft: '300px',   
    paddingRight: '300px',
  };

  const imgStyle = {
    width: '400px',  
    height: '400px',
    borderRadius: '50%',  
    objectFit: 'cover',  
    marginRight: '20px',  
  };

  const textStyle = {
    fontSize: '20px',  
    color: '#333',     
  };

  return (
    <div style={containerStyle}>
      <img src={Me} style={imgStyle} alt="Profile" />
      <div style={textStyle}>
        <h1>Welcome to My Page</h1>
        <p>I'm Sankeerthana, I am a Computer Science undergraduate in my 3rd year at GNITS, Hyderabad. 
            I have a keen interest in research and development.</p>
        <a
          className="btn btn-secondary btn-lg"
          href={`${process.env.PUBLIC_URL}/Resume_Sankeerthana.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}

