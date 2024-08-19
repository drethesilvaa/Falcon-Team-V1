/* eslint-disable @next/next/no-img-element */
import React from "react";

function Hero() {
   return (
      <section
         id="Hero"
         className="relative z-10 mb-16 xl:mb-3 xl:-mt-[100px] 2xl:-mt-[154px] pb-[75px]"
      >
         <div className="container">
            <div className="flex items-center justify-center 2xl:justify-end">
               <div className="grid grid-cols-2 gap-5">
                  <div data-aos="fade-up">
                     <img
                        className="translate-y-[75px] xl:w-[400px] 3xl:w-auto"
                        src="/images/pexels-pavel-danilyuk-8425018 1.jpg"
                        alt=""
                     />
                  </div>
                  <img
                     data-aos="fade-up"
                     className="xl:w-[400px] 3xl:w-auto"
                     src="/images/pexels-pavel-danilyuk-8425057 1.png"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
