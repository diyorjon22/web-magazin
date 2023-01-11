import React from "react";
import "./nav.css";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiPhoneIncoming } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import usa from "../../../../assets/images/us-flag.webp";
import fra from "../../../../assets/images/france.webp";

const Nav = () => {
  const [opens, setOpens] = React.useState(false);
  const [openu, setOpenu] = React.useState(false);
  const [openf, setOpenf] = React.useState(false);
  return (
    <section className="site-nav">
      <div className="container">
        <div className="nav">
          <div className="nav-icons">
            <a className="nav-web" href="face">
              <FiFacebook />
            </a>
            <a className="nav-web" href="twi">
              <FiTwitter />
            </a>
            <a className="nav-web" href="you">
              <FiYoutube />
            </a>
            <a className="nav-web" href="inst">
              <FiInstagram />
            </a>
            <div className="nav-tel">
              <p className="nav-web__tel">
                <FiPhoneIncoming />
              </p>
              <a className="nav-web__a" href="tel:(+123)4567890">
                (+123)4567890
              </a>
            </div>
          </div>
          <div className="nav-list">
            <Link onClick={() => setOpens(!opens)} className="nav-list__li">
              Settings{" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
            <Link onClick={() => setOpenu(!openu)} className="nav-list__li">
              USD ${" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
            <Link onClick={() => setOpenf(!openf)} className="nav-list__li">
              {" "}
              <img src={usa} alt="" /> English{" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
          </div>
        </div>
        {opens && (
          <div className="nav-down">
            <ul className="nav-drop">
              <li>My Account</li>
              <hr />
              <li>Chekcout</li>
              <hr />
              <li>Sign Out</li>
            </ul>
          </div>
        )}
        {openu && (
          <div className="nav-usd">
            <ul className="nav-eur">
              <li>EUR $</li>
              <hr />
              <li>USD $</li>
            </ul>
          </div>
        )}
        {openf && (
          <div className="nav-usa">
            <ul className="nav-fra">
              <li>
                {" "}
                <img src={usa} alt="" /> English
              </li>
              <hr />
              <li>
                {" "}
                <img src={fra} alt="" /> France
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
export default Nav;
