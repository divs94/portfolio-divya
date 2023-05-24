import React from "react";
import { Grid } from "@mui/material";
import react from "../imgaes/react.svg";
// import node from "../imgaes/node.svg";
// import github from "../imgaes/github.svg";
// import jira from "../imgaes/jira.svg";
import Container from "react-bootstrap/Container";
import Hidden from "@mui/material/Hidden";
import portfolioImg from "../imgaes/portfolioPic.svg";

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



{/* <Row>
<Col xs={12} sm={12} lg={12} md={12}>
  <div className="home_section">
    <Row>
      <Col xs={12} lg={8} xl={8}>
        <div>
          <div className="home_header">
            <span>
              {" "}
              <p>Hello I Am, Divya Tailang</p>
              <h3>Software Developer/Web Designer</h3>
            </span>
          </div>
        </div>
      </Col>
    </Row>

    <div className="home_body">
      <Row>
        <Col xs={12} sm={12} md={12} xl={12}>
          <div className="skills_wrapper">
            {/* <img src={react} alt="react icon" /> */}
//             <div className="skill_card">
//               <p>
//                 <img src={react} alt="react icon" />
//                 <img src={node} alt="node icon" />
//                 <img src={github} alt="github icon" />
//                 <img src={jira} alt="bitbucket icon" /> <br />
//                 <hr />
//                 I’m a Front-End developer. I usually love to work with{" "}
//                 <span>HTML, CSS, JavaScript, React.js</span>{" "}
//                 technologies.
//                 <hr />I worked on Back-end technologies such as{" "}
//                 <span>node.js, express.js, Mongodb.</span>
//                 <hr />
//                 Self-learner & a Confident person with experience of
//                 work. Skilled in Helping Clients, Website Building
//                 <hr />I am a UI/UX Graphic designer, who loves to
//                 design with creativity.
//               </p>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   </div>
// </Col>
// </Row> */}





// <div className="home_body">
// <Row>
//  <Col xs={12} sm={12} md={6} xl={6}>
//  <div className="skills_wrapper">
//     {/* <img src={react} alt="react icon" /> */}
//     <div className="skill_card">
//     <img src={react} alt="react icon" />

//       <p>
//         I’m a Front-End developer. I usually love to work with{" "}
//         <span>HTML, CSS, JavaScript, React.js</span> technologies.

//       </p>

//     </div>
//   </div>
//  </Col>

// <div className="home_body">
// <Row>
//  <Col xs={12} sm={12} md={6} xl={6}>
//  <div className="skills_wrapper">
//     {/* <img src={react} alt="react icon" /> */}
//     <div className="skill_card">
//     <img src={react} alt="react icon" />

//       <p>
//         I’m a Front-End developer. I usually love to work with{" "}
//         <span>HTML, CSS, JavaScript, React.js</span> technologies.

//       </p>

//     </div>
//   </div>
//  </Col>

//  <Col xs={12} sm={12} md={6}>
//  <div className="skills_wrapper">
//     {/* <img src={node} alt="node icon" /> */}
//     <div className="skill_card">
//     <img src={node} alt="node icon" />

//       <p>
//         I worked on Back-end technologies such as{" "}
//         <span>node.js, express.js, Mongodb.</span>

//       </p>

//     </div>
//   </div>
//  </Col>
// </Row>

// <Row>
//  <Col xs={12} sm={12} md={6}>
//  <div className="skills_wrapper">
//     {/* <img src={github} alt="github icon" /> */}
//     <div className="skill_card">
//     <img src={github} alt="github icon" />

//       <p>
//         Self-learner & a Confident person with experience of work.
//         Skilled in Helping Clients, Website Building.

//       </p>
//     </div>
//   </div>
//  </Col>

//  <Col xs={12} sm={12} md={6}>
//  <div className="skills_wrapper">
//     {/* <img src={jira} alt="bitbucket icon" /> */}
//     <div className="skill_card">
//     <img src={jira} alt="bitbucket icon" />

//       {" "}
//       <p>
//         I am a UI/UX Graphic designer, who
//         loves to design with creativity.

//       </p>
//     </div>
//   </div>
//  </Col>
// </Row>
// </div>
// </div>
