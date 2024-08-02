import React, { useState, useEffect } from 'react';
import './Courses.scss';

function Courses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [openCourses, setOpenCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const email = sessionStorage.getItem('userEmail');
  const firstName = sessionStorage.getItem('userFirstName');

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:8000/courses');
      const courses = await response.json();
      setAllCourses(courses);
      setOpenCourses(courses);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (email) {
        const response = await fetch(`http://localhost:8000/users?email=${email}`);
        const userData = await response.json();
        const courseIds = userData.enrolledCourses || [];
        const enrolled = allCourses.filter(course => courseIds.includes(course._id));
        const open = allCourses.filter(course => !courseIds.includes(course._id));
        setEnrolledCourses(enrolled);
        setOpenCourses(open);
      }
    };

    fetchUserData();
  }, [allCourses, email]);

  const handleEnroll = async (courseId) => {
    if (!email) {
      alert('Please log in to enroll in a course.');
      return;
    }

    const response = await fetch('http://localhost:8000/enroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, courseId }),
    });

    if (response.ok) {
      const updatedCourses = allCourses;
      const newCourse = updatedCourses.find(course => course._id === courseId);

      setEnrolledCourses([...enrolledCourses, newCourse]);
      setOpenCourses(openCourses.filter(course => course._id !== courseId));
    } else {
      const result = await response.json();
      alert(result.msg);
    }
  };

  return (
    <div className="courses">
      <div className='courses-header'>
        <h1 className='welcome'>Welcome Back, {firstName || "Guest"}!</h1>
      </div>
      <div className='my-courses'>
        <h1>Currently Enrolled Courses</h1>
        <div className='course-skeleton'>
          {enrolledCourses.map(course => (
            <div key={course._id} className="course">
              <img src={course.image} alt={course.title} />
              <div className='course-overlay'>
                <h2>{course.title}</h2>
                <a href={course.url}>Go to Course</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='my-courses'>
        <h1>Other Courses</h1>
        <div className='course-skeleton'>
          {openCourses.map(course => (
            <div key={course._id} className="course">
              <img src={course.image} alt={course.title} />
              <div className='course-overlay'>
                <h2>{course.title}</h2>
                <button onClick={() => handleEnroll(course._id)}>Join Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
