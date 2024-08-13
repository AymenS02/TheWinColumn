import React, { useState, useEffect } from 'react';

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
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (email && allCourses.length > 0) {
        const response = await fetch(`http://localhost:8000/signin?email=${email}`);
        const userData = await response.json();
        console.log(response);
        console.log(userData);
        const courseIds = userData.enrolledCourses || [];
        const enrolled = allCourses.filter(course => courseIds.includes(course._id));
        const open = allCourses.filter(course => !courseIds.includes(course._id));
        setEnrolledCourses(enrolled);
        setOpenCourses(open);
        
      }
    };

    fetchUserData();
  }, [email, allCourses]);

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
    <div className="m-0">
      <div className="min-h-[70%]">
        <h1 className="m-0 p-[3vh] pt-[3vh] pb-[7vh] text-3xl text-gray-800 text-center bg-gradient-to-b flex items-center justify-start">
          Welcome Back, {firstName || "Guest"}!
        </h1>
      </div>
      <div className="p-[3vh] border-b-2 border-[#333738] flex flex-col">
        <h1>Currently Enrolled Courses</h1>
        <div className="flex flex-wrap">
          {enrolledCourses.map(course => (
            <div
              key={course._id}
              className="text-[#e3dddd] bg-[#333738] w-[30vh] flex flex-col justify-between items-center mr-[2vh] border-b-2 border-[#333738] mb-[2vh]"
            >
              <img src={course.image} alt={course.title} className="w-[30vh] object-cover" />
              <div className="w-full h-full flex flex-col justify-between items-center cursor-pointer transition duration-300 hover:bg-[#e3dddd] hover:text-[#333738] hover:border hover:border-[#333738]">
                <h2 className="text-xl m-0 p-[1vh] text-center">{course.title}</h2>
                <a
                  href={course.url}
                  className="bg-[#333738] text-[#e3dddd] border border-[#e3dddd] p-[1vh] m-[1vh] no-underline cursor-pointer transition duration-300 hover:bg-[#e3dddd] hover:text-[#333738] hover:border-[#333738]"
                >
                  Go to Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[3vh] border-b-2 border-[#333738] flex flex-col">
        <h1>Other Courses</h1>
        <div className="flex flex-wrap">
          {openCourses.map(course => (
            <div
              key={course._id}
              className="text-[#e3dddd] bg-[#333738] w-[30vh] flex flex-col justify-between items-center mr-[2vh] border-b-2 border-[#333738] mb-[2vh]"
            >
              <img src={course.image} alt={course.title} className="w-[30vh] object-cover" />
              <div className="w-full h-full flex flex-col justify-between items-center cursor-pointer transition duration-300 hover:bg-[#e3dddd] hover:text-[#333738] hover:border hover:border-[#333738]">
                <h2 className="text-xl m-0 p-[1vh] text-center">{course.title}</h2>
                <button
                  onClick={() => handleEnroll(course._id)}
                  className="bg-[#333738] text-[#e3dddd] border border-[#e3dddd] p-[1vh] m-[1vh] no-underline cursor-pointer transition duration-300 hover:bg-[#e3dddd] hover:text-[#333738] hover:border-[#333738]"
                >
                  Join Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
