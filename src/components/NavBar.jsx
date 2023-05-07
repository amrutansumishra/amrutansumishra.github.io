import React from "react";
import "./NavBar.css";
import brandlogo from "../utils/images/Amrutansu.png";
import mypic from "../utils/images/mypic2.jpeg";


function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" to="#">
          <img src={brandlogo} className="img-fluid" alt="Amrutansu" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={brandlogo} className="img-fluid" alt="Amrutansu" />
            </h5>
            <a
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></a>
          </div>
          <div className="offcanvas-body">
            <div className="nav-profile mb-4">
              <img src={mypic} className="mb-3" alt="Amrutansu"/>
              <h2 className="mb-3">Amrutansu Mishra</h2>
              <div className="mt-2">
              <a href="http://https://github.com/amrutansumishra" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
              <a href="http://www.facebook.com/amrutansumishra" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
              <a href="http://twitter.com/Amrutansumishra" target="_blank" rel="noreferrer"><i class="bi bi-twitter"></i></a>
              <a href="https://www.youtube.com/@oyeyarcoder" target="_blank" rel="noreferrer"><i class="bi bi-youtube"></i></a>
              <a href="https://www.linkedin.com/in/amrutansu-mishra/" target="_blank" rel="noreferrer"> <i class="bi bi-linkedin"></i></a>
              <a href="mailto:mishraamrutansu@gmail.com"><i class="bi bi-envelope-fill"></i></a>
              </div>
              
            </div>
            <ul className="navbar-nav ms-auto d-flex align-items-center hidden-xs">
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-house-door"></i><span>Home</span>
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#about">
                  <i className="bi bi-person"></i><span>About</span>
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#contact">
                  <button className="contact">
                    <i className="bi bi-envelope"></i><span>Contact</span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
