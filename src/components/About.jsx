import React from 'react'
import mypicBackground from '../utils/images/mypic.jpg';
import mypic1 from '../utils/images/mypic2.jpeg';
import aws from '../utils/images/aws.png';
import javaScript from '../utils/images/javascript.png';
import expressjs from '../utils/images/expressjs.png';
import bootstrap from '../utils/images/bootstrap.png';
import reactjs from '../utils/images/reactjs.png';
import nodejs from '../utils/images/nodejs.png';
import html from '../utils/images/html.png';
import css from '../utils/images/css.png';
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
          
        <h3>UI Developer &amp; Software Developer.</h3>
            <p className="fst-italic">
            Currently working as a System Engineer in Tata Consultancy Services Limited. Having 2+ years of experience with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, JavaScript, React Js, Node js, MongoDb, MySQL Strong background in real life project management.
            </p>
            <div className="row about">
              <div className="col-lg-6">
                <ul className=''>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.amrutansu.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 **********</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bengaluru, India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master in Computer Application</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mishraamrutansu@gmail.com</span></li>
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
      <div className='row pt-5'>
      <div className='section-title'>
              <h2>Skills</h2>
          </div>
      </div> 
      <div className="row d-flex align-items-center justify-content-between">
      
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={html}  className="img-fluid" alt="HTML"/>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={css}  className="img-fluid" alt="css"/>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={javaScript}  className="img-fluid" alt="javascript"/>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={bootstrap}  className="img-fluid" alt="bootstrap"/>
      </div>      
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={reactjs}  className="img-fluid" alt="reactjs"/>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={nodejs}  className="img-fluid" alt="nodejs"/>
      </div>
      
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
      <img src={expressjs}  className="img-fluid" alt="expressjs"/>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 skill-image">
        <img src={aws}  className="img-fluid" alt="AWS"/>
      </div>
      </div>     
         
    </div>

    </section>
    
  )
}

export default About;