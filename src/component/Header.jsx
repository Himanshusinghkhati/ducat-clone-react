import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/nav.css";

function Header() {
  return (
    <header id="header" className="center_logo">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link to="/">
                <img src="../images/logo.webp" alt="..." />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav gap-3">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cources
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Java
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/.NET"
                          target="_blank"
                          rel="noreferrer"
                        >
                          .NET
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Python
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Software_testing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Software Testing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Web_development"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Web Designing - Full Stack Development
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Programming_language"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Programming Languages
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Cloud_computing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Cloud Computing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Salesforce"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Salesforce
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Computer-aided_design"
                          target="_blank"
                          rel="noreferrer"
                        >
                          CAD Training
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Mobile_app_development"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Mobile Application Development
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Network_security"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Network & Security
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Digital_marketing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Digital Marketing
                        </a>
                      </li>

                      <li>
                        <a
                          className="dropdown-item"
                          href="https://en.wikipedia.org/wiki/Microsoft_Power_BI"
                          target="_blank"
                          rel="noreferrer"
                        >
                          MIS - Advanced Excel - BI Tools
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      AboutUs
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Others
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to="/contact">
                          ContactUs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/about">
                          AboutUs
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
