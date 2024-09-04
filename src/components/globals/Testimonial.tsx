/* eslint-disable @next/next/no-img-element */
import React from "react";
import Rating from "react-rating";

function Testimonial() {
  return (
    <section id="testimonials" className="mb-16 sm:mb-[76px]">
      <div className="container">
        <div className="mb-4">
          <h2
            data-aos="fade-up"
            className="font-source-sans-pro font-bold text-4xl leading-none mb-2"
          >
            What customers say about us
          </h2>
          <p
            data-aos="fade-up"
            className="font-source-sans-pro text-lg leading-none"
          >
            We do our best to provide you the best experience ever
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
