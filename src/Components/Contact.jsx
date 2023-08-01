import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

export default function Contact() {
  return (
    <>
      <section>

        <Tabs
          defaultActiveKey="contact"
          id="justify-tab-example"
          className="mt-3"
          style={{ padding: "0px 60px" }}
          justify
        >
          <Tab eventKey="contact" title="Contact">
            <div className="contact_body">
              <div className="contact_wrapper">
                <div className="contact_card">
                  <h3>Social Links</h3>
                  <ul>
                    <li>
                      <span>Email:</span>
                      <span>
                        <a
                          target="_/blank"
                          href="mailto:divyatlng0@gmail.com ? Cc= tlngdivya@gmail.com"
                        >
                          divyatlng0@gmail.com
                        </a>
                      </span>
                    </li>

                    {/* <li>
                      <span>Resume Pdf:</span>
                      <p>
                        <a
                          target="_/blank"
                          href="https://drive.google.com/file/d/16GUZ9m_39ZY4mEEwremwiC2Q9nTWCZgG/view?usp=sharing"
                        >
                          Divya's Resume
                        </a>
                      </p>
                    </li> */}

                    <li>
                      <span>Mobile:</span>
                      <p>
                        <a target="_/blank" href="tel:+917019898582">
                          +91 701 989 8582
                        </a>
                      </p>
                    </li>
                    <li>
                      <span>Dribble:</span>
                      <span>
                        <a target="_/blank" href="https://dribbble.com/iam_divs">
                          https://dribbble.com/iam_divs
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Behance:</span>
                      <span>
                        <a
                          target="_/blank"
                          href="https://www.behance.net/divyatailang"
                        >
                          https://behance.com/divs94
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Github:</span>
                      <span>
                        <a target="_/blank" href="https://github.com/divs94">
                          https://github.com/divs94
                        </a>
                      </span>
                    </li>

                    <li>
                      <span>Linked In:</span>
                      <span>
                        <a
                          target="_/blank"
                          href="https://www.linkedin.com/in/divya-t-468642203"
                        >
                          https://linkedin.com/divs94
                        </a>
                      </span>
                    </li>



                    <li>
                      <span>Figma:</span>
                      <span>
                        <a
                          target="_/blank"
                          href="https://www.figma.com/@iam_divs"
                        >
                          https://figma.com.divs94
                        </a>
                      </span>
                    </li>

                    {/* https://stackoverflow.com/users/16797259/divya */}

                    <li>
                      <span>Stackoverflow:</span>
                      <span>
                        <a
                          target="_/blank"
                          href=" https://stackoverflow.com/users/16797259/divya "
                        >
                          https://stckovrflw.com/divs94
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>


          <Tab eventKey="service" title="Services">
            <div className="contact_header">
              <h3>What I Offer</h3>
              <div>
                <ol>
                  <li>Professional in eye catchy UI(User interface)</li>
                  <li>professional in UX(User Experience)</li>
                  <li>
                    Responsible for Compatible Designs with DESKTOP, TAB and
                    MOBILE
                  </li>
                  <li>Excellent problem-solving skills</li>
                  <li>Specializing in website Designs</li>
                  <li>Expertise Creating and Redesign websites</li>
                  <li>
                    Experienced at troubleshooting websites and Redesign websites
                  </li>
                  <li>Proficient in MERN development and coded sites</li>
                  <li>
                    Familiarity with Adobe Products (Adobe illustration ,Adobe XD,
                    Web Premium CSS5)
                  </li>
                  <li>Guaranteed customer satisfaction</li>
                  <li>
                    Provide project on given time but i prefer before time
                    delivery
                  </li>
                  <li>Continued support after completion</li>
                </ol>
              </div>


            </div>
          </Tab>

        </Tabs>

      </section>
    </>
  );
}
