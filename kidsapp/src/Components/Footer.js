import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Left />
      <Right />
    </div>
  );
};

export default Footer;

const Left = () => {
    //this year
    const year = new Date().getFullYear(); 

  return (
    <div className="left">
      <p>
        Course correct exposes your kid to the best interactive learning and <br/>
        also expose them to the lastest technologies.
      </p>
      <br />
      <p>Take your kids from zero to hero!</p>
      <br />
      <br />
      <h4>Copyright©{year}</h4>
    </div>
  );
};
const Right = () => {
  return (
    <div className="right">
      <h1>Right</h1>
    </div>
  );
};
