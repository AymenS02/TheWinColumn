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
import Admin from './pages/admin/Admin';
import './App.scss';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <ul className="heading">
            <motion.li 
              className="heading-element"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >               
                <Link to="/">
                  <img className="logo" src="/thewin.png" alt="profile" />
                </Link>
            </motion.li>
            <motion.li 
            className="heading-element"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <Link to="/courses">Courses</Link>
            </motion.li>
            <motion.li 
            className="heading-element"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >               
              <Link to="/community">Community</Link>
            </motion.li>
            <motion.li 
            className="heading-element"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >               
              <Link to="/about">About</Link>
            </motion.li>
            <motion.li 
            className="heading-element"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <Link to="/contact">Contact</Link>
            </motion.li>
            <motion.li 
            className="heading-element"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <Link to="/admin">Admin</Link>
            </motion.li>
            <motion.li 
            className="heading-element"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <Link to="/sign-in">Sign In</Link>
            </motion.li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



