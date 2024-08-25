import React, { useState } from 'react';

function Create() {
  const [showCreateForm, setShowCreateForm] = useState(true);

  const handleAddChapterClick = () => {
    setShowCreateForm(false);
  };

  
  return (
    <div className="flex justify-center items-center">
      {showCreateForm ? (
      <div className="w-full max-w-[80vh] p-8 bg-white rounded-lg shadow-lg">
        <h1 className="title text-3xl font-bold text-center mb-6 text-gray-800">
          Create a Course!
        </h1>
        <form>

          <div className="form-group mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Course Title"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
              Details
            </label>
            <input
              type="text"
              id="details"
              placeholder="Course Details"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
              Host
            </label>
            <input
              type="text"
              id="details"
              placeholder="Course Host"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
            onClick={handleAddChapterClick}
          >
            Create
          </button>

        </form>
      </div>
    ) : (
      <div className="w-full flex h-auto m-0">
        <div className="w-[20vw] border-r-2 border-black pt-20 h-[90vh]">
          <h3>Pro Tip</h3>
          <p>Don’t worry, you can easily rearrange the order of your content by clicking a lesson and dragging it into your desired location.</p>
        </div>
        <div className="h-[20vh] w-[80vw] flex items-center justify-center pt-20">
          <button
            type="submit"
            className="h-10 px-4 bg-blue-500 text-white font-semibold rounded-md"
          >
            + Add a Chapter
          </button>
        </div>
      </div>

      )}
    </div>
  );
}

export default Create;
