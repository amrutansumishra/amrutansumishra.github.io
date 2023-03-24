import React from 'react'
import mypicBackground from '../utils/images/mypic.jpg';
import mypic1 from '../utils/images/mypic2.jpeg';
import './About.css';
function About() {
  return (
    <section>
<div className='intro'>
    <div>Hi, I am Amrutansu...
    <p>Chase Your Dream to Achieve it.</p>
    </div>            
</div>
<div className='intro-background'>
  <img src={mypicBackground} alt="logo" />
</div>
    <div id="about" className="container py-5">
      <div className="row">
      <div className='section-title'>
              <h2>About</h2>
          </div>
      <div className='col-lg-4 myimage'>
          <img src={mypic1}  className="img-fluid" alt="logo" />
        </div>        
        <div className='col-lg-8'>
          
        <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
            Currently working as a System Engineer in Tata Consultancy Services Limited. Having 2+ years of experience with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, JavaScript, React Js, Node js, MongoDb, MySQL Strong background in real life project management.
            </p>
            <div className="row about">
              <div className="col-lg-6">
                <ul className=''>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.amrutansu.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 78730 33317</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bengaluru, India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master in Computer Application</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@amrutansu.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Open to work:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>Achievements:</p>
            <div>
              <ul>
                <li>Learning Achievement Award, On the spot and  Best Team Award in TCS</li>
                <li> Ranked 34 out of 40k+ participants in OJEE for MCA in 2017 </li>
                <li>Earned 4 star in Python Programing in Hackerrank Platfrom - 2020</li>
              </ul>
            </div>
            <p>Certifications:</p>
            <div>
              <ul>
                <li>AWS cloud partitioner -2022</li>
                <li>Certified in Web Development from INTERNSHALA- 2018 </li>
                <li>Post Graduate Diploma in Computer Application from Mind mart Computer Center-2015</li>
              </ul>
            </div>

        </div>
      </div>        
    </div>
    </section>
    
  )
}

export default About;