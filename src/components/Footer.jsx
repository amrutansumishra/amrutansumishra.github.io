import React from "react";
import "./Footer.css";
import brandlogo from "../utils/images/Amrutansu-white.png";

function footer() {
  return (
    <section id="footer">
<div className="container">
      <div className="footer-content row d-flex align-items-center justify-content-between">
        <div className="col-lg-4 text-center">
              <img src={brandlogo} className="img-fluid" alt="Amrutansu" />{" "}
        </div>
        <div className="col-lg-4">
          <div className="pages-link">
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          </div>          
        </div>
        <div className="col-lg-4">
          <div className="social-media ">
          <ul>
            <li>
              <a href="https://github.com/amrutansumishra" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
            </li>
            <li>
            <a href="https://www.youtube.com/@oyeyarcoder" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amrutansu-mishra/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
            </li>
            <li>
              <a href="mailto:mishraamrutansu@gmail.com"><i class="bi bi-envelope-fill"></i></a>
            </li>  
          </ul>
          </div>          
        </div>
      </div>
      <div className="footer-last">
        <ul>
          <li><a>Term and Conditions</a></li>
          <li><a>Privacy Policy</a></li>
          <li>copyright © Amrutansu</li>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default footer;
