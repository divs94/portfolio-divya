import React from "react"
import Project from "./Project";
import img2 from "../imgaes/wagonW.png";
import img1 from "../imgaes/wagonM.png";

export default function SinglePgApp(props) {
  const heading ="Ecommerce Application";
  const desc ="  I have created Single page application for website developmentcompatible on both desktop and mobile with Home ,About, Services and Contact page. "
  const para = "Compatible with desktop, iPad, mobile all devices."
   const techTitle = "Tech Stack used:"
    const techDesc ="HTML, CSS , Bootstrap , JavaScript, Nodejs (Express) , MongoDB"
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
