import React from "react";
import "./header.css";
import Logo from "../../../../assets/images/logo.webp";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbArrowsShuffle } from "react-icons/tb";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [modal, setModal] = React.useState(false);
  const [modall, setModall] = React.useState(false);
  const [fix, setFix] = React.useState(false);
  const [burger, setBuerger] = React.useState(false);

  function setFixed() {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <header className={fix ? "site-header fixed" : "site-header"}>
      <div className="container">
        <div className="header">
          <div className="header-img">
            <img src={Logo} alt="" />
          </div>
          <div className="header-pages">
            <Link className="header-list">
              Home{" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
            <Link className="header-list">
              Shop{" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
            <Link className="header-list">
              Pages{" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
            <Link className="header-list">
              Blog{" "}
              <p>
                <MdKeyboardArrowDown />
              </p>
            </Link>
            <Link>Contact us</Link>
          </div>
          <div className="header-product">
            <Link>
              <FiSearch />
            </Link>
            <Link>
              <TbArrowsShuffle />
            </Link>
            <Link onClick={() => setModall(!modall)}>
              <FaRegHeart />
            </Link>
            <Drawer
              anchor="right"
              open={modall}
              onClose={() => setModall(false)}
            >
              <div className="wishlist">
                <p>Wishlist</p>
                <span onClick={() => setModall(false)}>
                  <GrClose />
                </span>
              </div>
              <button className="wishlist-btn">VIEW WISHLIST</button>
            </Drawer>
            <Link onClick={() => setModal(!modal)}>
              <HiOutlineShoppingCart />

            </Link>
            <Drawer anchor="right" open={modal} onClose={() => setModal(false)}>
              <div className="card">
                <p>Card</p>
                <span onClick={() => setModal(false)}>
                  <GrClose />
                </span>
              </div>
              <div className="card-btn">
                <button className="btn1">VIEW CARD</button>
                <button className="btn2">CHEKCOUT</button>
              </div>
              <p className="btn-p">Free Shipping on All Orders Over $100!</p>
            </Drawer>
          </div>

          <Link onClick={() => setBuerger(!burger)} className="burger">
            <HiMenu />
          </Link>
          <Drawer anchor="left" open={burger} onClose={() => setBuerger(false)}>
            <div className="burger-wrap">
              <p onClick={() => setBuerger(false)}>
                <GrClose />
              </p>
              <ul className="burger-product">
                <Link className="list">
                  <FiSearch />
                </Link>
                <Link className="list">
                  <TbArrowsShuffle />
                </Link>
                <Link className="list">
                  <FaRegHeart />
                </Link>
                <Link className="list">
                  <HiOutlineShoppingCart />
                </Link>
              </ul>
              <div className="burger-title">
                <p>Home</p>
                <p>Shop</p>
                <p>Pages</p>
                <p>Blog</p>
                <p>Contact us</p>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
