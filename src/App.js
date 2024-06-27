// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Courses from './pages/courses/Courses';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <ul className="heading">
            <li className="heading-element">
              <Link to="/">Home</Link>
            </li>
            <li className="heading-element">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="heading-element">
              <Link to="/about">About</Link>
            </li>
            <li className="heading-element">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


