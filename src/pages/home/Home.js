import React from 'react';
import courses from '../../courseData.js'; // Adjusted path
import { useLocation, useNavigate } from 'react-router-dom';

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

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center bg-[#333738] min-h-[50vh]">
        <h1 className="m-[2vh] text-[4em] text-[#e3dddd] text-center">Relentless Coaching!</h1>
        <h1 className="m-[2vh] text-[3em] text-[#e3dddd] text-center">Welcome Back {firstName || "Guest"}</h1>
      </div>
      <div className="pt-[4vh]">
        <h2 className="text-[3em] text-[#333738] m-0 flex justify-center items-center pb-[2vh] text-center">
          Course Curriculum
        </h2>
        <ul className="list-none p-0 pt-[2vh] m-0">
          {enrolledCourses.map((course) => (
            <li key={course.id} className="flex justify-center pb-[3vh]">
              {openCourses[course.id] ? (
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-[1.5em] text-[#333738] m-0">{course.title}</h3>
                  <p className="text-[1em] text-[#333738] m-0">{course.details}</p>
                  <button
                    className="w-[50vh] border-2 border-[#333738] bg-transparent p-[1vh] text-left m-0 text-[1.3em] cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    Hide Details
                  </button>
                </div>
              ) : (
                <button
                  className="w-[50vh] border-2 border-[#333738] bg-transparent p-[1vh] text-left m-0 text-[1.3em] cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {course.title}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
