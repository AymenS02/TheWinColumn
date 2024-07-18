// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Courses from './pages/courses/Courses';
import Profile from './pages/profile/Profile';
import Community from './pages/community/Community';
import Signin from './pages/signin/Signin';
import Register from './pages/signin/Register';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <ul className="heading">
            <li className="heading-element">
              <Link to="/">
              <img className="logo" src="/thewin.png" alt="profile" />
              </Link>
            </li>
            <li className="heading-element">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="heading-element">
              <Link to="/community">Community</Link>
            </li>
            <li className="heading-element">
              <Link to="/about">About</Link>
            </li>
            <li className="heading-element">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="heading-element"> 
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



