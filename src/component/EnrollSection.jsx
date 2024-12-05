import React from "react";
import "../css/style.css";
import "../css/enrollsection.css";

function EnrollSection() {
  return (
    <section className="my-5 enroll-class">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="en corporate-training-curriculum">
              <strong>Get expert guidance—call or WhatsApp us today!!</strong>
              <p className="mobile-hidden">
                A roadmap for readying key roles in your organization for
                business in the digital age.
              </p>
            </div>
            <div className="row  enroll-call-numbars">
              <div className="col-md-12 mb-2">
                <div className="enroll-class-form">
                  <h1 className="calling-head">Call</h1>
                  <a href="tel:7070905090" className="calling-btn">
                    <i className="fa-solid fa-phone pe-1"></i> +91-7340886766
                  </a>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div className="enroll-class-form">
                  <h1 className="calling-head">WhatsApp</h1>
                  <a href="https://wa.me/918742993469" className="calling-btn">
                    <i className="fa-brands fa-whatsapp pe-1"></i>{" "}
                    +91-7340886766
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="enroll-img mobile-hidden">
              <img
                src="../images/enroll.webp"
                alt="Enroll"
                loading="lazy"
                width="340"
                height="301"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EnrollSection;
