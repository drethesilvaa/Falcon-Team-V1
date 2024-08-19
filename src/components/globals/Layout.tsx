"use client";
import React, {ReactNode, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface LayoutProps {
   children?: ReactNode;
}

function Layout({children}: LayoutProps) {
   useEffect(() => {
      AOS.init({
         duration: 500,
         once: true,
      });
   }, []);

   return <div>{children}</div>;
}

export default Layout;
