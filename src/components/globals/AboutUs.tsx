/* eslint-disable @next/next/no-img-element */
import React from "react";

function AboutUs() {
  return (
    <section id="about-us" className="mb-16 sm:mb-24">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="font-source-sans-pro font-bold text-5xl mb-7"
        >
          About Us
        </h2>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-10 items-start">
            <div data-aos="fade-up" className="">
              <div className="font-source-sans-pro text-lg leading-[2]">
                <p>
                  In Falcon Team, we offer first class transfer services with
                  one of the most experienced group in personal and high risk
                  protection. We have experienced staff that is good at keeping
                  you safe and be discreet but will also provide an experience
                  as per your taste.
                </p>
                <br />
                <p>
                  By leveraging our expertise in the field of personal security,
                  we can better-suited to meet clients with more extensive needs
                  such as business executives and high-asset individuals. We
                  know that privacy and professionalism are absolutely key,
                  carefully crafted around each journey with meticulous
                  planning.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex 2xl:justify-end items-center"
            >
              <div className="grid gap-2.5">
                {["pexels-pavel-danilyuk-8425044.jpg"].map((image, index) => (
                  <img
                    className="shadow "
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    src={`/images/${image}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <div
              data-aos="fade-up"
              className="order-2 md:order-1 flex 2xl:justify-end items-center"
            >
              <div className="grid">
                {["pexels-pavel-danilyuk-8425362.jpg"].map((image, index) => (
                  <img
                    className="shadow"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    src={`/images/${image}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="order-1 md:order-2 font-source-sans-pro text-lg leading-[2]"
            >
              <p>
                Apart from our advanced work in personal safety, we are
                deep-rooted into the local perception of Portugal's main
                landmarks. Whether you are planning on traveling to the
                breathtaking coastal cities, exploring all of what Portugal
                offers in terms of historic landmarks or feel like getting
                off-the-beaten-track and finding hidden gems; our team has got
                your covered when it comes to completely safe travel while
                making sure that experiencing best-of-Portugal is always a
                possibility.
              </p>
              <br />
              <p>
                And we are concerned about your safety and satisfaction. Travel
                with Falcon Team and be sure that everything there is taken care
                of to the finest detail, so you can have a good time in Portugal
                without any worries. This will be done while delivering an
                outstanding service for you, in order to make each journey a
                memorable and stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
