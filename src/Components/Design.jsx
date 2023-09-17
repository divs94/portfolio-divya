import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import signup from '../imgaes/figma/signup-design.png';
import web3 from '../imgaes/figma/web3-landing-page.png';
import appLight from "../imgaes/figma/app-light.png"
import appDark from "../imgaes/figma/app-dark.png"
import appLight1 from "../imgaes/figma/app-light1.png"
import login from "../imgaes/figma/login-design.png"


function Design() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='design_slider'>
        {/* <h1>UI/UX DESIGNS</h1> */}
        <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Want To Create Attractive UI's..??")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcome To My UI Gallery..")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("My Designs Your Idea..")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Let's Create Together..!!")
                        .start();
                }}
            />
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={2000}>
          <img src={signup} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={login} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={web3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={appDark} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img src={appLight} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img src={appLight1} alt="Third slide" />
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default Design;