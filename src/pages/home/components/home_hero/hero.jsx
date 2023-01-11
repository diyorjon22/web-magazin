import React from "react";
import "./hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sli1 from "../../../../assets/images/slide1.jpg";
import sli2 from "../../../../assets/images/slide2.jpg";
import sli3 from "../../../../assets/images/slide3.jpg";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';
import styled from "styled-components";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";


const Div = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 25%;
  margin-right: 6%;


  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
  }
`;
const Div2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  margin-top: 25%;
  margin-left: 3%;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
  }
`;
const NextIcon = styled(MdChevronRight)`
  font-size: 32px;
`;
const PrevIcon = styled(MdChevronLeft)`
  font-size: 32px;
`;
const style = {
  color: "#fff",
  cursor: "pointer",

};
export function Next(props) {
  const { onClick } = props;

  return (
    <Div onClick={onClick} className={"arrows"}>
      <NextIcon style={style} />
    </Div>
  );
}
export function Prev(props) {
  const { onClick } = props;
  return (
    <Div2 onClick={onClick}  className={"arrows"}>
      <PrevIcon style={style} />
    </Div2>
  );
}



const Hero = () => {
  const settings = {
    dots: true,
    infinite: false,
    fade:true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow:<Next/>,
    prevArrow:<Prev/>,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="site-hero">
      <div className="hero-slick">
        <Slider {...settings}>
          <img className="hero-img" src={sli1} alt="" />
          <img className="hero-img" src={sli2} alt="" />
          <img className="hero-img" src={sli3} alt="" />
        </Slider>
      </div>
      <div className="container">
        <div className="hero-title">
          <Slide left>
            <p>face makeup brush</p>
            <h2>scincare brush set sale 30% off</h2>
            <Link className="hero-btn">shopnow</Link>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Hero;
