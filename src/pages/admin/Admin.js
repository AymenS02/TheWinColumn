import React from 'react';

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
              <a href="/admin/components/create" rel="noopener noreferrer">
                Create a Course?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
