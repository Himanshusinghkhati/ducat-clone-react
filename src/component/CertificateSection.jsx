import React from "react";
import "../css/style.css";
import "../css/certificatesection.css";

function CertificateSection() {
  return (
    <>
      <div className="banner-bottom">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12"> */}
            {/* <div className="box-outer_1"> */}
            <div className="box_1 col-6 col-sm-6 col-md-3">
              <img
                src="/images/skills-1.png"
                alt="Learn The Essential"
                loading="lazy"
                width="45"
                height="90"
                decoding="async"
                data-nimg="1"
              />
              <p className="text-white">Learn The Essential Skills</p>
            </div>
            <div className="box_1 col-6 col-sm-6 col-md-3">
              <img
                src="../images/skills-2.webp"
                alt="Learn The Essential"
                loading="lazy"
                width="45"
                height="90"
                decoding="async"
                data-nimg="1"
              />
              <p className="text-white">Earn Certificates And Degrees</p>
            </div>
            <div className="box_1 col-6 col-sm-6 col-md-3">
              <img
                src="../images/skills-3.png"
                alt="Learn The Essential"
                loading="lazy"
                width="45"
                height="90"
                decoding="async"
                data-nimg="1"
              />
              <p className="text-white">Get Ready for The Next Career</p>
            </div>
            <div className="box_1 col-6 col-sm-6 col-md-3">
              <img
                src="../images/skills-4.png"
                alt="Learn The Essential"
                loading="lazy"
                width="45"
                height="90"
                decoding="async"
                data-nimg="1"
              />
              <p className="text-white">Master at Different Areas</p>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default CertificateSection;
