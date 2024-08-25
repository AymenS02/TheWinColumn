import courses from '../courseData.js'; // Adjusted path
import React, { useEffect } from 'react';

function Home() {
  const [openCourses, setOpenCourses] = React.useState({});
  const enrolledCourses = courses.filter(course => course.enrolled);

  const firstName = sessionStorage.getItem('userFirstName');

  const handleCourseClick = (courseId) => {
    setOpenCourses(prevState => ({
      ...prevState,
      [courseId]: !prevState[courseId] // Toggle the open state of the clicked course
    }));
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:8000/courses');
      const courses = await response.json();
    };

    fetchCourses();

  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className=''>
          <h1 className="m-[2vh] text-[4em] text-gray-800 text-center">Relentless Coaching!</h1>
          <h1 className="m-[2vh] text-[3em] text-gray-800 text-center">Welcome Back {firstName || "Guest"}</h1>
        </div>
      </div>
      <div className="bg-gray-800 pt-[4vh] h-screen">
        <h2 className="text-[3em]  text-gray-100 m-0 flex justify-center items-center pb-[2vh] text-center">
          <u>Course Curriculum</u>
        </h2>
        <ul className="list-none p-0 pt-[2vh] m-0">
          {enrolledCourses.map((course) => (
            <li key={course.id} className="flex justify-center p-4">
              <div className="flex flex-col w-1/2 justify-center items-center border-2 p-5 border-gray-100">
              {openCourses[course.id] ? (
                <div className='flex flex-col justify-center'>
                  <h3 className="text-[1.5em] text-center text-gray-100 m-0">{course.title}</h3>
                  <p className="text-[1em] text-center text-gray-100 m-0 p-3">{course.details}</p>
                  <button
                    className="justify-center border-2 text-gray-100 border-gray-100 bg-transparent p-2 mt-4 text-[1.3em]"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    Hide Details
                  </button>
                </div>
              ) : (
                <button
                  className="bg-transparent text-center text-gray-100 m-0 text-[1.5em]"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {course.title}
                </button>
              )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
