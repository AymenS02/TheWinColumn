// src/pages/home/Home.js
import React from 'react';
import './Home.scss';
import courses from '../../courseData'; // Adjusted path
import Courses from '../courses/Courses'; // Adjusted path

function Home() {
  const [openCourses, setOpenCourses] = React.useState({});

  const handleCourseClick = (courseId) => {
    setOpenCourses(prevState => ({
      ...prevState,
      [courseId]: !prevState[courseId] // Toggle the open state of the clicked course
    }));
  };

  return (
    <div className="home">
      <h1 className="title">Relentless Coaching!</h1>
      <div className='course-section'>
        <h2 className='course-title'>Course Curriculum</h2>
        <ul className="course-list">
          {courses.map((course) => (
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


