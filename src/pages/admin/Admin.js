import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Create from './components/create/Create.js';

function Admin() {
  return (
    <div className="m-0 bg-slate-50">
      <div className="px-4 flex flex-col w-1/4 border-r-2 border-gray-800 h-[1140px]">
        <div className="m-2 mt-8">
          <div className="mb-6 text-2xl">
            <h1 className="underline">Welcome back Coach!</h1>
          </div>
          <ul className="">
            <li className="">
              <Link to="/create">Create a Course?</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
