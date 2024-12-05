import React from "react";
import "../css/style.css";
import "../css/aboutbannersection.css";

function AboutBannerSection() {
  return (
    <div class="about_banner">
      <img
        class="about-banner-img"
        src="../images/about-banner.jpg"
        alt="about"
        loading="lazy"
        width="100%"
        height="600"
      />
      <div class="about_content">
        <h1 class="about_heading">
          Our #1 Highest Priority is on <br />
          Building Your Job oriented Skills
        </h1>
      </div>
    </div>
  );
}
export default AboutBannerSection;
