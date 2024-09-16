"use client";
import Navbar from "@/components/globals/Navbar";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Hero from "@/components/globals/Hero";
import Services from "@/components/globals/Services";
import AboutUs from "@/components/globals/AboutUs";
import Testimonial from "@/components/globals/Testimonial/Testimonial";
import ContactUs from "@/components/globals/ContactUs";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <div className="bg-cover bg-no-repeat z-0 relative bg-main">
      <Navbar />
      <Hero />
      <div className="flex container mb-16 sm:mb-24 md:mb-32">
        <div className="flex-grow">
          <div className="max-w-[800px]">
            <section className="mb-16 sm:mb-24 md:mb-[140px]">
              <div className="">
                <p
                  data-aos="fade-up"
                  className="font-source-sans-pro font-light italic text-xl leading-7"
                >
                  “Best service from the booking to the driver”
                </p>
                <h1
                  data-aos="fade-up"
                  className="font-bold font-source-sans-pro text-6xl leading-tight mb-5"
                >
                  WE ALWAYS DELIVER <br />
                  WHAT YOU NEED
                </h1>
                <ScrollLink
                  data-aos="fade-up"
                  href="#"
                  offset={-32}
                  activeClass="active"
                  to={"contact-us"}
                  spy
                  className="bg-[#415A77] text-white font-source-sans-pro font-semibold text-3xl pt-1 pb-2 px-12 rounded-lg shadow-sm"
                >
                  GET IN TOUCH
                </ScrollLink>
              </div>
            </section>
            <Services />
          </div>
        </div>
        <div className="hidden 2xl:block">
          <img
            className="rounded-3xl absolute -translate-x-full -translate-y-[28%] 2xl:w-[450px] 2xl:h-[1150px] 3xl:h-auto 3xl:w-[728px]"
            src="/images/layer-main-color.png"
            alt=""
          />
        </div>
      </div>
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <footer className="bg-white py-1">
        <div className="container">
          <p className="text-neutral-700 font-source-sans-pro text-base leading-tight text-right">
            @Copyright {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
