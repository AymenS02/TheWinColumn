import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Create from './components/create/Create.js';
import './Admin.scss';

function Admin() {
  return (
    <div className="admin">
      <div className="admin-sidebar">
        <div className='admin-sidebar-header'>
          <h1 className='admin-sidebar-header-title'>Hello</h1>
        </div>
        <ul className="admin-sidebar-menu">
          <li className="admin-sidebar-menu-item">
            <Link to="/create">Create a Course</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
