import React from 'react';
import './Courses.scss';

function Courses() {
    // Sample course data
    const enrolledCourses = [
        {
            id: 1,
            title: 'Under Construction: Your Coaching Overview',
            image: 'course1.png',
            url: '/course1'
        },
        {
            id: 2,
            title: 'My Weekly Winning Plays',
            image: 'course2.png',
            url: '/course2'
        },
        // Add more course objects as needed
    ];

    return (
        <div className="courses">
            <div className='courses-header'>
                <h1 className='welcome'>Welcome Back, Jay!</h1>
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
            <div className='other-courses'>
                <h1>Other Courses</h1>
                
            </div>
        </div>
    );
}

export default Courses;