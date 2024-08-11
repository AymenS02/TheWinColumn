import React from 'react';

function Navbar() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-start bg-[#AECDD9] m-10 p-8 rounded-3xl border-2 border-[#333738] shadow-lg">
        <h1 className="mt-10 text-3xl">Navbar</h1>
        <p className="mt-4 text-xl">This is the Navbar component.</p>
      </div>
    </div>
  );
}

export default Navbar;