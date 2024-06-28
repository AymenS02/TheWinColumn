import React from 'react';
import './Home.scss';

function Home() {
  const courses = [
    { id: 1, title: 'Course 1', details: 'Details of Course 1' },
    { id: 2, title: 'Course 2', details: 'Details of Course 2' },
    { id: 3, title: 'Course 3', details: 'Details of Course 3' },
    { id: 4, title: 'Course 4', details: 'Details of Course 4' },
    { id: 5, title: 'Course 5', details: 'Details of Course 5' },
  ];

  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="home">
      <h1 className="title">Relentless Coaching!</h1>
      <div className='course-section'>
        <h2 className='course-title'>Course Curriculum</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id} className="course-list-item">
              {selectedCourse && selectedCourse.id === course.id ? (
                <div className="course-details">
                  <h3>{course.title}</h3>
                  <p>{course.details}</p>
                </div>
              ) : (
                <button onClick={() => handleCourseClick(course)}>{course.title}</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

