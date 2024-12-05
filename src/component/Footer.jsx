import React from "react";
import CopyrightSection from "./CopyrightSection";
import "../css/style.css";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container py-3">
        <div className="row ">
          <div className=" col-md-4 mb-1 c-mobile_f2">
            <h4>Our Popular Courses</h4>
            <div className="row">
              <div className="col-6">
                <a
                  className="nav-link p-0 text-muted"
                  href="/javafullstackdeveloper"
                >
                  Java FullStack
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/pythonanddjangotraining"
                >
                  Python Full Stack
                </a>
                <a className="nav-link p-0 text-muted" href="/.net-fullstack">
                  .Net Full Stack
                </a>
                <a className="nav-link p-0 text-muted" href="/merntraining">
                  Mern Stack
                </a>
                <a className="nav-link p-0 text-muted" href="/meantraining">
                  Mean Stack
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/advancephptraining"
                >
                  PHP Full Stack
                </a>
              </div>
              <div className="col-6">
                <a
                  className="nav-link p-0 text-muted"
                  href="/ui-ux-design-course"
                >
                  UI/UX Course
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/dataanalyticsusingpython"
                >
                  Data Analytics{" "}
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/cyber-security-training-course-in-noida"
                >
                  Cyber Security
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/ethicalhackingtraining"
                >
                  Ethical Hacking
                </a>
                <a className="nav-link p-0 text-muted" href="/aws">
                  Aws
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/cloudcomputingtraining"
                >
                  Cloud Computing
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-1 m-order-4">
            <h4>Other Top Courses</h4>
            <div className="row">
              <div className="col-6">
                <a
                  className="nav-link p-0 text-muted"
                  href="/erp-s4-hana-fico-training"
                >
                  SAP Hana Fico
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/salesforcedevtraining"
                >
                  Salesforce
                </a>
                <a className="nav-link p-0 text-muted" href="/ccnatraining">
                  CCNA
                </a>
                <a className="nav-link p-0 text-muted" href="/autocadtraining">
                  AutoCAD
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/graphic-designing-pro-course"
                >
                  Graphic Designing
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/multimedia-animation"
                >
                  Multimedia &amp; Animation
                </a>
              </div>
              <div className="col-6">
                <a className="nav-link p-0 text-muted" href="/manual_selenium">
                  Manual + Selenium Testing
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/full-stack-qa-training-course-in-noida"
                >
                  Full Stack QA
                </a>
                <a
                  className="nav-link p-0 text-muted"
                  href="/reactnativetraining"
                >
                  React Native
                </a>
                <a className="nav-link p-0 text-muted" href="/reactjstraining">
                  React
                </a>
                <a className="nav-link p-0 text-muted" href="/angular2training">
                  Angular
                </a>
                <a className="nav-link p-0 text-muted" href="/devopstraining">
                  Devops
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-1 m-order-3">
            <div className="row">
              <div className="col-6">
                <h4>Policies</h4>
                <a className="nav-link p-0 text-muted" href="/privacy-policy">
                  Privacy Policy
                </a>
                <a className="nav-link p-0 text-muted" href="/refund-policy">
                  Refund Policy
                </a>
                <a className="nav-link p-0 text-muted" href="/tnc">
                  Terms and Conditions
                </a>
                <a className="nav-link p-0 text-muted" href="/blog">
                  Blog
                </a>
                <a
                  target="_blank"
                  className="nav-link p-0 text-muted"
                  href="https://tutorials.ducatindia.com/"
                  rel="noopener noreferrer"
                >
                  TUTORIALS
                </a>
              </div>
              <div className="col-6">
                <h4>Follow Us!</h4>
                <ul className="list-unstyled d-flex social">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://instagram.com"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://youtube.com"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <CopyrightSection />
        </div>
      </div>
    </div>
  );
}

export default Footer;
