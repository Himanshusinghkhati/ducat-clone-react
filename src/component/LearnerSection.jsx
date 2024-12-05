import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import "../css/style.css";
import "../css/learnersection.css";

const LearnerSection = () => {
  const [items] = useState([
    { img: "../images/placement-1.webp" },
    { img: "../images/placement-2.webp" },
    { img: "../images/placement-3.webp" },
    { img: "../images/placement-4.webp" },
    { img: "../images/placement-5.webp" },
    { img: "../images/placement-6.webp" },
    { img: "../images/placement-7.webp" },
    { img: "../images/placement-8.webp" },
    { img: "../images/placement-9.webp" },
    { img: "../images/placement-10.webp" },
    { img: "../images/placement-11.png" },
    { img: "../images/placement-12.webp" },
    { img: "../images/placement-13.webp" },
    { img: "../images/placement-14.webp" },
    { img: "../images/placement-4.webp" },
  ]);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.goTo(carouselRef.current.state.activeIndex + 1);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalRef.current); // Clear interval on unmount
  }, []);
  return (
    <div className="container px-0 py-0">
      <div className="row">
        <div>
          <h2 className="learner-h2">Our Learners Work At</h2>
          <p className="learner-para">
            Ducat learners work at some of the leading and innovative
            organizations of today, solving core business problems.
          </p>
        </div>
        <Carousel ref={carouselRef} itemsToShow={6}>
          {items.map((item) => (
            <img width="160" height="100" src={item.img} alt="..." />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default LearnerSection;
