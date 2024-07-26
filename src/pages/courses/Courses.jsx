// src/pages/courses/Courses.js
import React from 'react';
import './Courses.scss';
import courses from '../../courseData'; // Adjusted path

function Courses() {
    const enrolledCourses = courses.filter(course => course.enrolled);
    const openCourses = courses.filter(course => !course.enrolled);

    const firstName = sessionStorage.getItem('userFirstName');

    return (
        <div className="courses">
            <div className='courses-header'>
                <h1 className='welcome'>Welcome Back, {firstName || "Guest"}!</h1>
            </div> 
            <div className='my-courses'>
                <h1>Currently Enrolled Courses</h1>
                <div className='course-skeleton'>
                    {enrolledCourses.map(course => (
                        <div key={course.id} className="course">
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
                        <div key={course.id} className="course">
                            <img src={course.image} alt={course.title} />
                            <div className='course-overlay'>
                                <h2>{course.title}</h2>
                                <a href={course.url}>Join Course</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
