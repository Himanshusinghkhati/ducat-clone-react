import React from "react";
import "../css/style.css";
import "../css/herosection.css";

function HeroSection() {
  return (
    <div className="container">
      <div className="row">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex">
                <div className="col-md-6 d-flex align-items-center">
                  <p className="top-header-text">
                    Unlock your potential with us, and watch your career dreams
                    come to life
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="../images/hero-1.webp"
                    className="d-block w-100 img-responsive"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex">
                <div className="col-md-6 d-flex align-items-center">
                  <p className="top-header-text">
                    Take the first step towards a successful career with our
                    support and expertise
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="../images/hero-2.webp"
                    className="d-block w-100 img-responsive"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex">
                <div className="col-md-6 d-flex align-items-center">
                  <p className="top-header-text">
                    Learn from the future: Explore our AI-powered courses
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="../images/hero-3.webp"
                    className="d-block w-100 img-responsive"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex">
                <div className="col-md-6 d-flex align-items-center">
                  <p className="top-header-text">
                    Our goal is to empower your career ambitions
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="../images/hero-4.webp"
                    className="d-block w-100 img-responsive"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
