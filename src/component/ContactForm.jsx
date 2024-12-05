import React from "react";
import "../css/style.css";
import "../css/contactform.css";

function ContactForm() {
  return (
    <>
      <div className="contect-form">
        <div className="container">
          <div className="form-contect">
            <h2 className="context-heading">Connect with Us</h2>
            <p className="desc-contect">
              For further questions, including partnership opportunities, please
              email mail{" "}
              <span className="">to: iamhimanshukhati@gmail.com</span> or
              contact using our contact form.
            </p>
            <form>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label>
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Email Address"
                    type="email"
                    value=""
                    name="email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label>
                    Phone<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Phone Number"
                    type="text"
                    name="phone"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>
                    Center<span className="text-danger">*</span>
                  </label>
                  <select name="center" className="form-control">
                    <option value="" disabled="">
                      Select Branch
                    </option>
                    <option>Noida Sector 16</option>
                    <option>Sector 63, Noida</option>
                    <option>South Ex.</option>
                    <option>Pitampura</option>
                    <option>Vikaspuri</option>
                    <option>Gurugram</option>
                    <option>Ghaziabad</option>
                    <option>Faridabad</option>
                  </select>
                </div>
                <div className="col-12 mb-2">
                  <label>
                    Course<span className="text-danger">*</span>
                  </label>
                  <select name="course" className="form-control">
                    <option value="" disabled="">
                      Select a Course
                    </option>
                    <option>Cloud </option>
                    <option>SOLIDWORKS</option>
                    <option>Flutter</option>
                    <option>business analytics</option>
                    <option>Data Analytics</option>
                    <option>Java</option>
                    <option>Data Science</option>
                    <option>Python</option>
                    <option>Machine Learning</option>
                    <option>AWS</option>
                    <option>Azure</option>
                    <option>Salesforce</option>
                    <option>Linux</option>
                    <option>Advanced Excel </option>
                    <option>C Programming</option>
                    <option>C++</option>
                    <option>S4 Hana Fico</option>
                    <option>S4 Hana Mm</option>
                    <option>Android</option>
                    <option>S4 Hana Hcm</option>
                    <option>Devops</option>
                    <option>SAP</option>
                    <option>S4 Hana Sd</option>
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
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    How can we help you?<span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    className="form-control"
                    placeholder="Message..."
                  ></textarea>
                </div>
              </div>
              <input className="send_btn" type="submit" value="SEND MESSAGE" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
