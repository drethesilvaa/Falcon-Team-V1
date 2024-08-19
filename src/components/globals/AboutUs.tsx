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
            <div className="grid 2xl:grid-cols-2 gap-6 gap-x-[10%]">
               <div data-aos="fade-up" className="">
                  <div className="font-ubuntu text-lg leading-[2]">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                     <ul className="list-disc px-7">
                        <li>
                           At vero eos et accusamus et iusto odio dignissimos ducimus qui
                           blanditiis praesentium voluptatum deleniti atque corrupti quos
                           dolores
                        </li>
                     </ul>
                     <p>
                        Et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia
                        animi, id est laborum et dolorum fuga
                     </p>
                  </div>
               </div>
               <div data-aos="fade-up" className="flex 2xl:justify-end items-center">
                  <div className="grid grid-cols-3 gap-2.5">
                     {[
                        "pexels-pavel-danilyuk-8425362 1.png",
                        "pexels-pavel-danilyuk-8425403 1.png",
                        "pexels-pavel-danilyuk-8425405 1.png",
                     ].map((image, index) => (
                        <img
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
         </div>
      </section>
   );
}

export default AboutUs;
