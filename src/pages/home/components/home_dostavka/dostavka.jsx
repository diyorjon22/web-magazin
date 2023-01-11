import React from "react";
import sec from "../../../../assets/images/section.svg";
import svg1 from "../../../../assets/images/1.jpg.svg";
import svg2 from "../../../../assets/images/2.jpg.svg";
import svg3 from "../../../../assets/images/3.jpg.svg";
import "./dostavka.css";
const Dostavka = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="ssection-img">
          <img className="dos-img" src={sec} alt="" />
        </div>
        <div className="section-card">
          <img className="img11" src={svg1} alt="" />
          <img className="img22" src={svg2} alt="" />
          <img className="img33" src={svg3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dostavka;
