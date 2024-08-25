import React, { useState } from 'react';

function Create() {
  const [chapters, setChapters] = useState([]); // State for chapters
  const [selectedChapter, setSelectedChapter] = useState(null); // State for selected chapter
  const [lessons, setLessons] = useState({}); // State for lessons in each chapter
  const [showLessonTypes, setShowLessonTypes] = useState(false); // State to show lesson types

  const [showCreateForm, setShowCreateForm] = useState(true);

  const handleAddCourseClick = () => {
    setShowCreateForm(false);
  };

  // Handler to add a new chapter
  const handleAddChapterClick = () => {
    const newChapter = `Chapter ${chapters.length + 1}`;
    setChapters([...chapters, newChapter]);
    setLessons({ ...lessons, [newChapter]: [] }); // Initialize empty lessons for the new chapter
  };

  // Handler to remove a chapter
  const handleRemoveChapterClick = (chapter) => {
    setChapters(chapters.filter((ch) => ch !== chapter));
    const updatedLessons = { ...lessons };
    delete updatedLessons[chapter];
    setLessons(updatedLessons);
    if (selectedChapter === chapter) {
      setSelectedChapter(null);
      setShowLessonTypes(false);
    }
  };

  // Handler to select a chapter and show lesson options
  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    setShowLessonTypes(true);
  };

  // Handler to add a lesson of a specific type
  const handleAddLessonClick = (type) => {
    const updatedLessons = { ...lessons };
    updatedLessons[selectedChapter].push(type);
    setLessons(updatedLessons);
  };

  // Handler to remove a lesson
  const handleRemoveLessonClick = (index) => {
    const updatedLessons = { ...lessons };
    updatedLessons[selectedChapter].splice(index, 1);
    setLessons(updatedLessons);
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
            onClick={handleAddCourseClick}
          >
            Create
          </button>

        </form>
      </div>
    ) : (
      <div className="w-full flex h-auto m-0">
        <div className="w-[20vw] border-r-2 border-black pt-20 h-[90vh]">
          <h3>Chapters</h3>
          <ul>
            {chapters.map((chapter, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => handleChapterClick(chapter)}
                >
                  {chapter}
                </span>
                <button
                  className="text-red-500 hover:text-red-700 ml-2"
                  onClick={() => handleRemoveChapterClick(chapter)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
            onClick={handleAddChapterClick}
          >
            + Add a Chapter
          </button>
        </div>

        <div className="w-[80vw] flex flex-col items-center justify-center pt-20">
          {showLessonTypes && selectedChapter ? (
            <div>
              <h3>{`Lessons in ${selectedChapter}`}</h3>
              <ul>
                {lessons[selectedChapter].map((lesson, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{lesson}</span>
                    <button
                      className="text-red-500 hover:text-red-700 ml-2"
                      onClick={() => handleRemoveLessonClick(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-4">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={() => handleAddLessonClick('Video')}
                >
                  Video
                </button>
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                  onClick={() => handleAddLessonClick('Text')}
                >
                  Text
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => handleAddLessonClick('PDF')}
                >
                  PDF
                </button>
                <button
                  className="px-4 py-2 bg-purple-500 text-white rounded-md"
                  onClick={() => handleAddLessonClick('Quiz')}
                >
                  Quiz
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => handleAddLessonClick('Presentation')}
                >
                  Presentation
                </button>
              </div>
            </div>
          ) : (
            <h3>Select a chapter to add lessons</h3>
          )}
        </div>
      </div>
    )}
    </div>
  );
}

export default Create;
