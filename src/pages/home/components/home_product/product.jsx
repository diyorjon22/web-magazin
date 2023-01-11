import React from "react";
import "./product.css";
import { Rating } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbArrowsShuffle } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import card1 from "../../../../assets/images/1.png.png";
import card2 from "../../../../assets/images/2.png.png";
import card3 from "../../../../assets/images/3.png.png";
import card4 from "../../../../assets/images/4.png.png";
import { GrClose } from "react-icons/gr";
import { Drawer } from "@mui/material";

const Products = [
  {
    img: card1,
    titlle: "All Natural Makeup Beauty Cosmetics",
    price: "$11.90",
    id: 1,
  },
  {
    img: card2,
    titlle: "On Trend Makeup and Beauty Cosmetics",
    price: "$11.90",
    id: 2,
  },
  {
    img: card3,
    titlle: "The Cosmetics and Beauty brand Shoppe",
    price: "$21.51",
    id: 3,
  },
  {
    img: card4,
    titlle: "orginal Age Defying Cosmetics Makeup",
    price: "$11.90",
    id: 4,
  },
];

const Product = ({ el }) => {
  const [modal, setModal] = React.useState(false);
  const [modall, setModall] = React.useState(false);
  return (
    <div className="site-product">
      <div className="container">
        <div className="product">
          <div className="product-title">
            <h2>Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, culpa?
            </p>
            <div className="product-menu">
              <span>New Products</span>
              <span>Onsale</span>
              <span>Upcoming Products</span>
            </div>
          </div>
          <ul className="shop-ul">
            {Products.map((el) => {
              return (
                <li key={el.id}>
                  <div className="product-card">
                    <div className="card1">
                      <img src={el.img} alt="" />
                      <div className="position">
                        <Link
                          onClick={() => setModall(!modall)}
                          className="card1-li_li"
                        >
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
                          <button className="wishlist-btn">
                            VIEW WISHLIST
                          </button>
                        </Drawer>
                        <Link className="card1-li_li">
                          <TbArrowsShuffle />
                        </Link>
                        <Link className="card1-li_li">
                          <FiSearch />
                        </Link>
                      </div>
                      <ul className="card1-ul">
                        <p>{el.titlle}</p>
                        <Stack mb="10px">
                          <Rating />
                        </Stack>
                        <li className="card1-li">
                          <span>{el.price}</span>
                          <Link
                            onClick={() => setModal(!modal)}
                            className="card1-li_li"
                          >
                            <HiOutlineShoppingCart />
                          </Link>
                          <Drawer
                            anchor="right"
                            open={modal}
                            onClose={() => setModal(false)}
                          >
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
                            <p className="btn-p">
                              Free Shipping on All Orders Over $100!
                            </p>
                          </Drawer>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
