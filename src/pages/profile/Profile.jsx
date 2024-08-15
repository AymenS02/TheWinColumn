import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);  // Update the login state in AppContent
    sessionStorage.removeItem('userFirstName');  // Clear session storage
    navigate('/sign-in');  // Navigate to sign-in page
  };

  return (
    <div className="flex flex-col items-center justify-center h-[30vh] p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Profile</h1>
        <p className="text-gray-600 mb-6 text-center">Welcome to your Profile!</p>

        <button 
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 font-semibold text-lg"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
