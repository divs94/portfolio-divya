import React from "react";
import { Grid } from "@mui/material";
import react from "../imgaes/react.svg";
import Container from "react-bootstrap/Container";
import Hidden from "@mui/material/Hidden";

export default function Home() {
  return (
    <>
      <Container>
      <Grid item xs={12} sm={12} md={10} lg={10} className="home_section">
       
      
        <Hidden only={['xs', 'sm']}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mypic">
          <img src={react} alt="homePic" />
          
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="home_head">
          <h1>I Am Divya Tailang</h1>
          <h3>Software Developer | Web Designer</h3>
          </div>
          <p>  I’m a Front-End developer. I usually love to work with{" "}
                 <span>HTML, CSS, JavaScript, React.js</span>{" "}
                 technologies.
                 <hr />I worked on Back-end technologies such as{" "}
                 <span>node.js, express.js, Mongodb.</span>
                 <hr />
                 Self-learner & a Confident person with experience of
                 work. Skilled in Helping Clients, Website Building
                 <hr />I am a UI/UX Graphic designer, who loves to
                 design with creativity.</p>
        </Grid>
        </Grid>
      </Container>
    </>
  );
}


