/* eslint-disable @next/next/no-img-element */
import React from "react";
import Checkbox from "@/components/common/Checkbox";
import TextArea from "@/components/common/TextArea";
import TextField from "@/components/common/TextField";

function ContactUs() {
  return (
    <section id="contact-us" className="pb-16 sm:pb-20">
      <div className="container">
        <div className="mb-7">
          <h2
            data-aos="fade-up"
            className="font-source-sans-pro font-bold text-5xl mb-3"
          >
            Let’s get in touch{" "}
          </h2>
          <p data-aos="fade-up" className="font-source-sans-pro text-xl">
            <span className="font-light">You can reach us everytime via</span>{" "}
            <span className="text-gray-900">email@email.com</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-[10%]">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <TextField label="First Name" placeholder="First Name" />
              <TextField
                label="Last Name"
                data-aos-delay="100"
                placeholder="Last Name"
              />
            </div>
            <TextField label="Email" placeholder="email@email.com" />
            <TextField label="Phone Number" placeholder="+351 9821846279460" />
            <TextArea
              rows={7}
              label="Message"
              placeholder="Leave a message..."
            />
            <div>
              <p
                data-aos="fade-up"
                className="font-source-sans-pro text-base leading-tight font-normal mb-3.5"
              >
                Services
              </p>
              <div className="grid grid-cols-2 gap-5 w-max">
                <Checkbox label="Transfer" />
                <Checkbox label="Boat Trips" />
                <Checkbox label="Tours" />
                <Checkbox label="Bus Rental" />
                <Checkbox label="Other" />
              </div>
            </div>
            <div data-aos="fade-up">
              <button
                type="button"
                className="bg-[#415A77] text-white shadow-sm font-source-sans-pro font-semibold text-lg rounded-lg w-full py-3 px-8 min-h-[50px] flex justify-center items-center"
              >
                Send Message
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="hidden lg:flex items-start justify-start"
          >
            <img src="/images/pexels-pavel-danilyuk-8424982 1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
