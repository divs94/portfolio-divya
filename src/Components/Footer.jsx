import React from "react";
import phone from "../imgaes/phone.svg";
import email from "../imgaes/email.svg";


export default function Footer() {
  return (
    <div className="footer">
         <span>
          <a
            target="_/blank"
            href="mailto: divyatlng0@gmail.com ? Cc= tlngdivya@gmail.com"
          >
           <img src={email} alt="email_icon" />
          </a>
        </span>
      <span>All Copyright Reserved @Divya T.</span>
     
        <span> 
          <a target="_/blank" href="tel:+917019898582">
          <img src={phone} alt="email_icon" />
           
          </a>
        </span>

    </div>
  );
}
