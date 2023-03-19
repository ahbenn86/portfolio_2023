import React from "react";
import { useState, useEffect } from "react";
import {GrLinkedin} from 'react-icons/gr'; 
import "./Navigation.css";

function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <nav
        className={
          scrolled
            ? "navbar navbar-expand-lg navigation scrolled"
            : "navbar navbar-expand-lg navigation"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/src/assets/laptop-memoji.svg"
              alt="Logo Image"
              width="50"
              height="50"
              className=""
            />
            Angelo Bennett
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    activeLink === "home" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  href="#home"
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeLink === "skills" ? "nav-link active" : "nav-link"
                  }
                  href="#skills"
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activeLink === "projects" ? "nav-link active" : "nav-link"
                  }
                  href="#projects"
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={GrLinkedin} alt="" />
                </a>
              </div>
              <button className="vvd" onClick="">
                <span>Let's Connect</span>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
