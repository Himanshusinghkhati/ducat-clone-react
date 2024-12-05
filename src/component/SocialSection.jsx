import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/socialsection.css";

function SocialSection() {
  return (
    <div className="social_fixed">
      <ul>
        <li className="call_ic">
          <Link to="tel:7340886766">
            <i className="fa-solid fa-phone text-white fs-5"></i>
          </Link>
        </li>
        <li className="whatsapp-fix py-2">
          <Link to="/career-guidance">
            <i className="fa-brands fa-whatsapp text-white fs-5"></i>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa-regular fa-envelope text-white fs-5"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SocialSection;
