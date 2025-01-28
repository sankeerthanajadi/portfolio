import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Art from './art/art_work'
import BlogMain from './blogs/blogMain'
import Nav from './components/Navbar'
import Home from './components/photo'
import Contact from './contact/contactme'

function Resume() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "54vw",
      height: "100vh", 
    }}>
      <iframe
        src="./Resume_Sankeerthana.pdf"
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      ></iframe>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Nav />   
      <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/photo" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs/blogMain" element={<BlogMain />} />
        <Route path="/art/art_work" element={<Art />} />
        <Route path="/contact/contactme" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
