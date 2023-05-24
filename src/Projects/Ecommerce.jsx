import React from "react"
import Project from "./Project";
import img2 from "../imgaes/wagonW.png";
import img1 from "../imgaes/wagonM.png";

export default function SinglePgApp(props) {
  const heading ="Ecommerce Application";
  const desc =" I have created an E-commerce Application where user can browse products add them in cart, compatible with Laptop, Tab, Mobile. "
  const para = "Compatible with desktop, iPad, mobile all devices."
   const techTitle = "Tech Stack used:"
    const techDesc ="React.js, JavaScript, React-Redux, css,"
  const linkTo = "https://wagon-fashions-divs94.vercel.app/"
  const linkText = "www.wagon.com";
 
 const duration = "Duration: July 2021– Aug 2021"

  return (
    <>
      <div className="card_wrapper">
      <Project 
        heading={heading}
        desc={desc}
        para={para}
        techTitle={techTitle}
        techDesc={techDesc}
        linkText={linkText}
        linkTo={linkTo}
        img1={img1}
        img2={img2}
        duration={duration}
        />

     
      </div>
    </>
  );
}
