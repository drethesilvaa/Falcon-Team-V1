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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-2.5">
          {[...Array(6)].map((_, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white py-8 px-5 shadow-lg"
              key={index}
            >
              <div className="mb-2">
                <img src="/images/oi_double-quote-serif-left.svg" alt="" />
              </div>
              <b className="block mb-3 font-robot font-medium text-base">
                Best on the market
              </b>
              <div className="flex flex-wrap items-center gap-x-2 mb-2">
                <div>
                  {/* @ts-ignore */}
                  <Rating
                    className="!flex gap-0.5"
                    initialRating={4}
                    fullSymbol={<img src="/images/star-full.svg" alt="" />}
                    emptySymbol={<img src="/images/star-empty.svg" alt="" />}
                  />
                </div>
                <p className="font-roboto font-light text-xs">2 days ago</p>
              </div>
              <p className="font-roboto font-light text-sm mb-2">
                I love this product because the support is great. Please ...
              </p>
              <div className="mb-2">
                <img src="/images/striet-line.svg" alt="" />
              </div>
              <strong className="font-roboto font-bold text-sm">
                Worldtraveler
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
