import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Art from './art/art_work'
import BlogMain from './blogs/blogMain'
import Nav from './components/Navbar'
import Home from './components/photo'
import Contact from './contact/contactme'
import Projects from './projects/projectDetails'

function App() {
  return (
    <Router>
      <Nav />   
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='projects/projectDetails' element={<Projects/>}/>
        <Route path="/blogs/blogMain" element={<BlogMain />} />
        <Route path="/art/art_work" element={<Art />} />
        <Route path="/contact/contactme" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
