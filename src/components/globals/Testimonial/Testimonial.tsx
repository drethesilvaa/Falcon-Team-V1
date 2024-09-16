import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Slider from "react-slick"; // Import the Slider component
import TestimonialDialog from "@/components/globals/Testimonial/New";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTestimonials } from "./useGetTestimonials";
import Rating from "@mui/material/Rating";

function Testimonial() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const testimonials: any = useGetTestimonials();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmitTestimonial = async (testimonial: any) => {
    try {
      const response = await fetch("/api/submit-testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonial),
      });

      if (response.ok) {
        toast.success("Thank you for your testimonial!");
      } else {
        toast.error("Failed to submit the testimonial.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="mb-16 sm:mb-[76px]">
      <div className="container">
        <div className="flex justify-between"></div>
        <h2 className="font-source-sans-pro font-bold text-4xl leading-none mb-2">
          What customers say about us
        </h2>

        <TestimonialDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          onSubmit={handleSubmitTestimonial}
        />

        {/* Slider Component */}
        <div className="my-5">
          <Slider {...sliderSettings}>
            {testimonials?.map((testimonial: any, index: number) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white py-8 px-5 shadow-lg"
                key={index}
              >
                <div className="mb-2">
                  <img src="/images/oi_double-quote-serif-left.svg" alt="" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 mb-2">
                  <div>
                    {/* Use the Rating component */}
                    <Rating value={testimonial.rating || 0} readOnly />
                  </div>
                  <p className="font-roboto font-light text-xs">
                    {testimonial.createdAt || "2 days ago"}
                  </p>
                </div>
                <p className="font-roboto font-light text-sm mb-2">
                  {testimonial.content ||
                    "I love this product because the support is great."}
                </p>
                <div className="mb-2">
                  <img src="/images/striet-line.svg" alt="" />
                </div>
                <strong className="font-roboto font-bold text-sm">
                  {testimonial.author || "Worldtraveler"}
                </strong>
              </div>
            ))}
          </Slider>
        </div>

        <button
          className="bg-[#415A77] text-white shadow-sm font-source-sans-pro font-semibold text-lg rounded-lg py-3 px-8"
          onClick={handleOpenDialog}
        >
          Submit Your Testimonial
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
