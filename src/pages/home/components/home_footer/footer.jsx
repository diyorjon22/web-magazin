import React from "react";
import "./footer.css";
import Logo from "../../../../assets/images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="footer">
          <div className="logo-footer">
            <img src={Logo} alt="" />
            <p>
              We are a team of professional designers and developers that create
              high quality wordpress plugins, Html, React Template.
            </p>
          </div>
          <div className="info-footer">
            <p>Information</p>
            <ul>
              <Link className="ul-link">About us</Link>
              <Link className="ul-link">Payment</Link>
              <Link className="ul-link">Contact</Link>
              <Link className="ul-link">Stores</Link>
            </ul>
          </div>
          <div className="info-footer">
            <p>Social Links</p>
            <ul>
              <Link className="ul-link">New products</Link>
              <Link className="ul-link">Best sales</Link>
              <Link className="ul-link">Login</Link>
              <Link className="ul-link">My account</Link>
            </ul>
          </div>
          <div className="email-footer">
            <p>Newsletter</p>
            <span>
              Subcribe to the TheFace mailing list to receive update on <br />{" "}
              mnew arrivals, special offers and other discount <br />{" "}
              information.
            </span>
            <ul>
              <input placeholder="Your email adress" type="text" />
              <button>Sign Up</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
