import React from "react";
import {Link as ScrollLink} from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const pages = [
   ["About Us", "about-us"],
   ["Services", "services"],
   ["Contact Us", "contact-us"],
];

function Navbar() {
   return (
      <nav className="py-5 relative z-50">
         <div className="container flex items-center gap-5">
            <div>
               <Link data-aos="zoom-in" href="/">
                  <Image
                     width={114}
                     height={114}
                     src="/images/logo.png"
                     alt="Falcon Team"
                     className="w-[64px] md:w-[80px] xl:w-[96px] 3xl:w-[114px]"
                  />
               </Link>
            </div>
            <ul className="flex items-center gap-3 lg:gap-5">
               {pages.map(([name, url], index) => (
                  <li data-aos="fade-up" data-aos-delay={index * 100} key={name}>
                     <ScrollLink
                        href="#"
                        offset={-32}
                        activeClass="active"
                        to={url}
                        spy
                        className="font-semibold text-lg font-source-sans-pro underline"
                     >
                        {name}
                     </ScrollLink>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
