import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "../css/style.css";
import "../css/testimonials.css";

function Testimonials() {
  const [items] = useState([
    { title: "Himanshu", img: "../images/test-2.jpg" },
    { title: "Rahul", img: "../images/test-2.jpg" },
    { title: "Deepak", img: "../images/test-3.png" },
    { title: "Pankaj", img: "../images/test-2.jpg" },
    { title: "Rakesh", img: "../images/test-2.jpg" },
    { title: "Amit", img: "../images/test-2.jpg" },
    { title: "Shilpa", img: "../images/test-3.png" },
    { title: "Shivali", img: "../images/test-1.webp" },
    { title: "Shivangi", img: "../images/test-3.png" },
  ]);
  return (
    <section className="testimonials-main-box container px-0 py-4">
      <div className="row">
        <div className="col-10">
          <h1 className="our-h2 pb-2"> Testimonials </h1>
        </div>
        <div className="col-2">
          <span></span>
        </div>
        <Carousel itemsToShow={3} className="testi py-4">
          {items.map((item) => (
            <div class="card border-0 p-4">
              <div className="d-flex justify-content-between">
                <h5 className="m-0 d-flex align-items-center">{item.title}</h5>
                <img
                  className="testimonial-img"
                  width="80"
                  height="80"
                  src={item.img}
                  alt="..."
                />
              </div>
              <div class="card-body p-0">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-end">
                  <a href="#" class="read-more">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
