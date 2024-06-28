import React from 'react';
import './Courses.scss';

function Courses() {
    return (
        <div className="courses">
        <div className='my-courses'>
            <h1>Current Enrolled Courses </h1>
            <p>View our courses here.</p>
        </div>
        <div className='other-courses'>
            <h1>Other Courses</h1>
            <p>View our other courses here.</p>
        </div>
        </div>
    );
    }

export default Courses;