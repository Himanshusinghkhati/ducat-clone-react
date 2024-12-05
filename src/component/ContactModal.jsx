import React from "react";
import "../css/style.css";
import "../css/contactmodal.css";

const ContactModal = ({ onClose }) => {
  return (
    <>
      <div className="modal home-popup-form" id="ducatModel">
        <div className="row py-1 new-popup-design">
          <div className="col-md-6 order-md-1 order-2  d-none d-md-block">
            <div className="popup-left">
              <h3 className="">
                <span className="popup-master">Master</span> IT Skills <br />{" "}
                for a Brighter <br />
                <span className="popup-future">Future!</span>
              </h3>
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 popup-right">
            <button
              onClick={onClose}
              type="button"
              className="close home-popup-form-close-outer"
            >
              ×
            </button>
            <div className="modal-content home-popup-form-content">
              <div className="modal-header home-popup-form-header">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      alt="popup-Avatar"
                      loading="lazy"
                      width="70"
                      height="90"
                      src="../images/popup-avatar.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="career-guidance-form home-popup">
                  <div className="form h-100">
                    <p className="now text-center">Enquire Now</p>
                    <form
                      className="custom_contact home_custom cour_2"
                      method="post"
                      id="contactForm"
                      name="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12 mb-3 form-group">
                          <input
                            className="form-control"
                            placeholder="Full Name"
                            type="text"
                            value=""
                            name="name"
                          />
                        </div>
                        <div className="col-md-12 mb-3 form-group ">
                          <input
                            className="form-control"
                            placeholder="Email Address"
                            type="email"
                            value=""
                            name="email"
                          />
                        </div>
                        <div className="col-md-12 mb-3 form-group ">
                          <input
                            className="form-control"
                            placeholder="Phone Number"
                            type="text"
                            value=""
                            name="phone"
                          />
                        </div>
                        <div className="col-md-12 mb-3 ">
                          <select name="course" className="form-control">
                            <option disabled="" value="">
                              Select a Course
                            </option>
                            <option>Generative AI</option>
                            <option>Flutter</option>
                            <option>Cloud </option>
                            <option>SOLIDWORKS</option>
                            <option>business analytics</option>
                            <option>Data Analytics</option>
                            <option>Java</option>
                            <option>Python</option>
                            <option>Data Science</option>
                            <option>Machine Learning</option>
                            <option>AWS</option>
                            <option>Azure</option>
                            <option>Salesforce</option>
                            <option>Linux</option>
                            <option>C Programming</option>
                            <option>Advanced Excel </option>
                            <option>C++</option>
                            <option>S4 Hana Fico</option>
                            <option>Android</option>
                            <option>S4 Hana Mm</option>
                            <option>S4 Hana Hcm</option>
                            <option>Devops</option>
                            <option>S4 Hana Sd</option>
                            <option>SAP</option>
                            <option>UI &amp; UX Design</option>
                            <option>Data science with R</option>
                            <option>Power BI</option>
                            <option>Cyber Security</option>
                            <option>Ms SQL</option>
                            <option>MIS</option>
                            <option>AutoCAD</option>
                            <option>PHP</option>
                            <option>Web DESIGNING</option>
                            <option>React</option>
                            <option>MERN</option>
                            <option>Mean</option>
                            <option>Graphic Designing</option>
                            <option>.Net</option>
                            <option>Testing</option>
                            <option>CCNA</option>
                            <option>CCNP</option>
                            <option>MCSA</option>
                            <option>Digital Marketing</option>
                            <option>Ethical Hacking</option>
                            <option>Other</option>
                            <option>Data Structure </option>
                            <option>Catia</option>
                            <option>AI</option>
                            <option>IOT</option>
                            <option>Web Developement</option>
                            <option>Autocad and 3D Max</option>
                            <option>Full Stack Development</option>
                            <option>Data Science using python</option>
                            <option>Gererative AI</option>
                            <option>Data Science &amp; AI</option>
                            <option>AI/ML</option>
                          </select>
                        </div>
                        <div className="col-md-12 form-group">
                          <input
                            className="btn btn-primary submit_bt  py-2 px-5"
                            // type="submit"
                            value="Submit "
                          />
                          <span className="submitting"></span>
                        </div>
                      </div>
                    </form>
                    <div id="form-message-warning mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
