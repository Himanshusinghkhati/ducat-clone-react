import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/notfoundpage.css";

function NotFoundPage() {
  return (
    <div class="stars">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-12 col-lg-8">
            <div class="central-body">
              <h1 class="text-inner">404</h1>
              <h3 class="sub-text text-white">page not found</h3>
              <p class="text-404 text-white text-center">
                The Page You Are Attempting To Reach Is Currently Not Available.
                This May Be Because The Page Does Not Exist Or Has Been Moved.
              </p>
              <Link class="btn mt-4 back-btn" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;
