import React from "react";
import Project from "./Project";
import img1 from "../imgaes/colorgamemob.svg";
import img2 from "../imgaes/colorgametab.svg";

export default function ColorGame(props) {
  const heading ="The Great RGB Color Game";
  const desc =" It's an RGB color game project with three ( Easy, Medium, Hard modes created by me. through to this game user can improve their RGB color understanding skills. It helps them to use colors while developing websites or games. "
  const para = "Compatible with desktop, iPad, mobile all devices."
   const techTitle = "Tech Stack used:"
    const techDesc ="HTML5 , Css, JavaScript."
  const linkTo = "https://divs94.github.io/Color-Grame/"
  const linkText = "www.thergbgame.com";
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
