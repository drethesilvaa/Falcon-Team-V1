/* eslint-disable @next/next/no-img-element */
import React from "react";

const services = [
   ["/images/boat-trips.svg", "Boat Trips"],
   ["/images/transfer.svg", "Transfer"],
   ["/images/bus-rental.svg", "Bus rental"],
   ["/images/tours.svg", "Tours"],
];

function Services() {
   return (
      <section id="services">
         <div className="">
            <h2
               data-aos="fade-up"
               className="font-source-sans-pro font-bold text-5xl mb-10"
            >
               Our Services
            </h2>
            <div className="grid grid-cols-2 gap-10 lg:gap-[70px]">
               {services.map(([image, name], index) => (
                  <div
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     key={name}
                     className="flex items-center gap-5"
                  >
                     <img
                        className="h-[36px] md:h-[48px] lg:h-[56px] xl:h-[64px] 3xl:h-[74px]"
                        src={image}
                        alt={name}
                     />
                     <span className="font-ubuntu font-medium text-xl">{name}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Services;
