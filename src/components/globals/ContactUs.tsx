import React, { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import TextArea from "@/components/common/TextArea";
import TextField from "@/components/common/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleServiceChange = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const sendMessage = async () => {
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          message,
          services,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send the message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

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
            <span className="font-light">You can reach us anytime</span>{" "}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-[10%]">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextArea
              rows={7}
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <p
                data-aos="fade-up"
                className="font-source-sans-pro text-base leading-tight font-normal mb-3.5"
              >
                Services
              </p>
              <div className="grid sm:grid-cols-2 gap-5 w-full">
                <Checkbox
                  label="Transfer"
                  onChange={() => handleServiceChange("Transfer")}
                />
                <Checkbox
                  label="Tours"
                  onChange={() => handleServiceChange("Tours")}
                />
                <Checkbox
                  label="Business Travel"
                  onChange={() => handleServiceChange("Business Travel")}
                />
                <Checkbox
                  label="Leisure and Professional Events"
                  onChange={() =>
                    handleServiceChange("Leisure and Professional Events")
                  }
                />
                <Checkbox
                  label="Other"
                  onChange={() => handleServiceChange("Other")}
                />
              </div>
            </div>
            <div>
              <ReCAPTCHA
                sitekey="6LcBCEEqAAAAADjV07Mus77kLoquFsQmDaio5o4H"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>
            <div data-aos="fade-up">
              <button
                type="button"
                className="bg-[#415A77] text-white shadow-sm font-source-sans-pro font-semibold text-lg rounded-lg w-full py-3 px-8 min-h-[50px] flex justify-center items-center"
                onClick={sendMessage}
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
