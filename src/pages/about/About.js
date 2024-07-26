// pages/About.js
import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="about">
      <h1>Turning Losses Into Lessons</h1>
      <h3>& Wins Into Stepping Stones</h3>

      <h2 className='title'>Welcome to The Win Column</h2>
      <hr /> 
      <p>The Win Column is an organization dedicated to helping clients in Human and Business Optimization across the globe. We assist clients in making small, incremental steps toward their goals while strategically fostering exponential growth. We believe in providing the "How", the "Where", and the "Why", NOT just the "What."  We equip our clients with the tools and resources they need to become their own superheroes - our clients launch into their own realm of greatness as they motivate and inspire those around them!</p>
      <h2 className='title'>Our Mission</h2>
      <hr /> 
      <p>To pull people toward a life of fulfillment by design, not just existence by default. </p>
      <h2 className='title'>Meet Coach Jay Khan</h2>
      <hr /> 
      <div className='meet-coach'>
        <div className='body'>
          <h3><strong>HEAD COACH & FOUNDER</strong></h3>
          <p>Meet Coach Jay Khan,  a seasoned entrepreneur with over 18 years of global experience. His impressive career includes 15 years in the real estate industry and over 3000 hours of coaching and consultations, helping clients ranging from bootstrap startups to 8-figure companies achieve remarkable growth. Jay has founded and successfully exited 5 companies and has invested in over 10 companies total. 
          </p>
          <p>Currently, he is the CEO and Founder of two thriving ventures, including "The Win Column".  From starting his first company at 17 to being a former high-level athlete and community advocate, Jay's dedication to constant growth shines through. He's mentored hundreds of youths in Toronto, New York City, and even overseas, guided by strong faith, and serves clients in over 10 countries. Join Coach Jay Khan on a transformative journey toward success!
          </p>
        </div>
        <img src="/about/jay-khans.webp" alt="Jay Khan" className='imageJays'/>
      </div>
      <img src="/about/courses.webp" alt="Courses" className='imageCourses'/>
      <h2 className='title'>Client Testimonials</h2>
      <hr />
      <div className='slide-show'>
        <img className='tests' src="/about/testimonials1.webp" alt="Testimonials1" />
        <img className='tests' src="/about/testimonials2.webp" alt="Testimonials2" />
      </div>
      <h2 className='title'>About Us</h2>
      <hr />
      <div className='about-us'>
      <p>Founded in 2020 by the visionary entrepreneur Jerome Jay Khan, The Win Column emerged as a small coaching and consulting company with humble beginnings. Born just before the COVID-19 pandemic, it faced the challenges head-on, embodying the spirit of a bootstrap organization. The early days were marked by relentless dedication and the pursuit of excellence, one client at a time.
      </p>
      <p>While The Win Column proudly bears the label of a North American brand, its roots trace back to Kuala Lumpur, Malaysia, where the seeds of inspiration were sown. From its inception, The Win Column has been on a mission to empower hundreds of individuals, guiding them on the path of human development and business growth.
      </p>
      <p>At the heart of The Win Column's ethos is the powerful slogan: "Turning Losses into Lessons and Wins into Stepping Stones." This mantra reflects the company's unwavering commitment to helping clients take their losses as opportunities for growth and transform their victories into stepping stones to even greater success.
      </p>
      <p>
      Today, The Win Column operates on four continents, serving as a beacon of inspiration and guidance to individuals and businesses alike. With its unique blend of international perspective and dedication to turning challenges into triumphs, The Win Column is your partner in achieving success, no matter where you are on your journey. 
      </p>
      <a href="https://calendly.com/jeromejkhan/let-s-chat-clone?month=2023-01" className='button'>Book A Free Info Session!</a>
      </div>
      <h2 className='title'>Connect With Us</h2>
      <hr />
      <div className='connect'>
        <img src="/about/instagram-icon.webp" alt="Instagram" className='instagram-icon' onClick={() => window.location.href = 'https://www.instagram.com/coachjaykhan/'} />
        <img src="/about/instagram-icon.webp" alt="Instagram" className='instagram-icon' onClick={() => window.location.href = 'https://x.com/home'} />
        <img src="/about/instagram-icon.webp" alt="Instagram" className='instagram-icon' onClick={() => window.location.href = 'https://www.youtube.com/channel/UCG6Blz3ouFL-3c6scAEM3xg'} />
      </div>
    </div>
  );
}

export default About;
