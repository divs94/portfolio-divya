import React from "react";
import porfoliopic from "../imgaes/portfolioPic.svg";

export default function () {
  return (
    <>
      <div className="about_section">
        <div className="about_head">
          <div>
            <img className="about_image" src={porfoliopic} alt="image" />
          </div>
          <div>
            <span>
              <h1>Divya T.</h1>
            </span>
            <div>
            <hr/>
              <p>
                Self motivated, self dedicated, self learner, these words which
                are enough to Make a Successful satisfied Life. Divya is a
                personality who has raised herself with confidence & strong
                meaningfull opinion.Observing and raised in a culture where
                selective rights allotted to womens , She has decided to break
                all barriers and boundaries with her knowledge and bring
                Innovation.
                <br />
                Divya has Master's degree of English literature in Women's write
                & Empowerment. During her studies she has written several
                Stories, Poems and Quotes which relates bottom dark & bright
                truth of life and conclude As a human being how necessary is to
                take care of mental and physical health in "Life's Diary".
                <br />
                Divya is a professional, team player, fast learner and diligent
                individual who relishes in attention to detail tasks. She has a
                great communicative understanding and probes to know if she is
                doubt. She has great creative ideas that she puts in a clear and
                concise way.
                <br />
                During Pandemic understanding the power of technology & Every
                Lives Need, she entered in tech & built applications using :
                React js, JavaScript, CSS, Node js, NoSQL . Being as a Software
                Developer and UI/UX Designer She love to Design applications
                with modern technology tools and trends.
                <br/>
                <br/>
            
                <blockquote className="about_contact">
                <hr/>
                  <h3>Need A Web Developer & Designer</h3>
                  <span className="contact_title">Send me an Email : </span>
                  <span>
                    <a href="mailto: divyatlng0@gmail.com ? Cc= tlngdivya@gmail.com">
                      divyatlng0@gmail.com
                    </a>
                  </span>
                  <br/>
                  <span className="contact_title">Contact me at : </span>
                  <span>
                    <a target="_/blank" href="tel:+917019898582">
                       +91 7019898582
                    </a>
                  </span>
                </blockquote>
              </p>
            </div>
          </div>
        </div>

        <blockquote className="about_div">
          <span className="quotes">"</span>I can help your business stand out
          from the crowd by creating beautiful websites that communicates their
          expertise and allow them to grow their business so you can work on
          more ambitious projects. Self-learner and a Confident person with
          experience of work. Skilled in Helping Clients, Website Building. Work
          with Excellence and perfection to better skills.
          <span className="quotes">"</span>
        </blockquote>

        <div className="about_para">
          <h4>CERTIFICATIONS</h4>
          <div className="certifications">
            <div>
              <ul>
                <li>Udemy certifications in</li>
                <li> HTML (with Excellence) </li>
                <li> CSS (withExcellence)</li>
              </ul>
            </div>

            <div>
              {" "}
              <ul>
                <li>Bootstrap(with Excellence</li>
                <li>JavaScript (with Excellence)</li>
                <li>React.js(with Excellence)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
