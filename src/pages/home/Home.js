import React from 'react';
import './Home.scss';
import courses from '../../courseData.js'; // Adjusted path
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const [openCourses, setOpenCourses] = React.useState({});
  const enrolledCourses = courses.filter(course => course.enrolled);

  const firstName= sessionStorage.getItem('userFirstName');

  const handleCourseClick = (courseId) => {
    setOpenCourses(prevState => ({
      ...prevState,
      [courseId]: !prevState[courseId] // Toggle the open state of the clicked course
    }));
  };

  return (
    <div className="home">
      <div className="title-container">
        <h1 className="title">Relentless Coaching!</h1>
        <h1 className="sub-title">Welcome Back {firstName || "Guest"}</h1>
      </div>
      <div className='course-section'>
        <h2 className='course-title'>Course Curriculum</h2>
        <ul className="course-list">
          {enrolledCourses.map((course) => (
            <li key={course.id} className="course-list-item">
              {openCourses[course.id] ? (
                <div className="course-details">
                  <h3>{course.title}</h3>
                  <p>{course.details}</p>
                  <button onClick={() => handleCourseClick(course.id)}>Hide Details</button>
                </div>
              ) : (
                <button onClick={() => handleCourseClick(course.id)}>{course.title}</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
