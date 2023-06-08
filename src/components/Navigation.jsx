import React from "react";
import laptopMemoji from "/src/assets/navigation/laptop-memoji.svg";
import unqCircle from "/src/assets/navigation/unq-circle.svg";
import linkedIn from "/src/assets/navigation/linkedIn.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={laptopMemoji} alt="" className="mb-3 img-fluid" />
          <a className="navbar-brand" href="#bio">
            ANGELO BENNETT
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item m-5">
              <a className="nav-link active" aria-current="page" href="#">
                Bio
              </a>
            </li>
            <li className="nav-item m-5">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item m-5">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>   
          <img src={unqCircle} alt="" className="img-fluid m-2" />
          <img src={linkedIn} alt="" className="img-fluid m-2" />
          <button className="btn btn-light m-2 social-btn">Let's Connect</button>
      </div>
    </nav>
  );
}

export default Navigation;
