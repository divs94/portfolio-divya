import React from "react";


export default function Project(props) {
  const { heading, desc, techTitle,duration, para, techDesc, linkText, linkTo,img1,img2 } = props;

  return (
    <>
      <div className="card_wrapper">
        <div className="project_card">
          <div className="card_description">
            <h1>{heading}</h1>

            <p>{desc}</p>
            <p>{para}</p>

            <p>
              <strong>{techTitle}</strong> {techDesc}
            </p>
            <p>{duration}</p>
            <p>
              <span className="card_link">
                <strong>Link :</strong>
              </span>
              <a href={linkTo} target="_/blank">
                {linkText}
              </a>
            </p>
          </div>

          <div className="card_image">
            <span>
              <img className="img1" src={img1} alt={heading} />
            </span>
            <span>
              <img className="img2" src={img2} alt={heading} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
