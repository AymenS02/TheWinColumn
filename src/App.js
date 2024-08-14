import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import Courses from './pages/courses/Courses.jsx';
import Community from './pages/community/Community.jsx';
import Signin from './pages/signin/Signin.js';
import Register from './pages/signin/Register.js';
import Admin from './pages/admin/Admin.js';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle login
  const handleLogin = () => {
    const userFirstName = sessionStorage.getItem('userFirstName');
    if (userFirstName) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    // Check if redirected from Signin with state
    if (location.state && location.state.isLoggedIn) {
      handleLogin();
    } else {
      // Fallback to check session storage
      const userFirstName = sessionStorage.getItem('userFirstName');
      if (userFirstName) {
        setIsLoggedIn(true);
      }
    }
  }, [location.state, navigate]);

  return (
    <div className="m-0 bg-transparent">
      <nav className="flex bg-transparent">
        <ul className="flex bg-gray-800 items-center justify-end w-full gap-10 font-bold text-lg text-gray-100 pr-10 shadow-lg">
          <motion.li 
            className="first:mr-auto"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >               
            <Link to="/">
              <img className="h-20 m-6" src="/thewin.png" alt="profile" />
            </Link>
          </motion.li>
          {isLoggedIn && (
            <motion.li 
              className=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <Link to="/courses">Courses</Link>
            </motion.li>
          )}
          {isLoggedIn && (
            <motion.li 
              className=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >               
              <Link to="/community">Community</Link>
            </motion.li>
          )}
          <motion.li 
            className=""
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >               
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li 
            className=""
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          > 
            <Link to="/contact">Contact</Link>
          </motion.li>
          {isLoggedIn && (
            <motion.li 
              className=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <Link to="/admin">Admin</Link>
            </motion.li>
          )}
          { !isLoggedIn && (<motion.li 
            className=""
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          > 
            <Link to="/sign-in">Sign In</Link>
          </motion.li>
          )}
          {isLoggedIn && (
            <motion.li 
              className=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            > 
              <button className=" text-gray-100 border-none text-lg font-bold cursor-pointer" onClick={() => {
                setIsLoggedIn(false);
                sessionStorage.removeItem('userFirstName');
                navigate('/sign-in')
              }}>Sign Out</button>
            </motion.li>
          )} 
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        {isLoggedIn && <Route path="/community" element={<Community />} />}
        <Route path="/contact" element={<Contact />} />
        {isLoggedIn && <Route path="/admin" element={<Admin />} />}
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
