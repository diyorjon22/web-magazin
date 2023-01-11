import React from "react";
import './sponsor.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import spons1 from "../../../../assets/images/1.jpg (1).svg";
import spons2 from "../../../../assets/images/2.jpg (1).svg";
import spons3 from "../../../../assets/images/3.jpg (1).svg";
import spons4 from "../../../../assets/images/4.jpg (1).svg";
import spons5 from "../../../../assets/images/5.jpg (1).svg";

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
  margin-top: 3%;
  margin-right: 0%;

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
  margin-top: 3%;
  margin-left: -1%;

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
    <Div onClick={onClick} className={'arrows'}>
      <NextIcon style={style} />
    </Div>
  );
}
export function Prev(props) {
  const { onClick } = props;
  return (
    <Div2 onClick={onClick} className={'arrows'}>
      <PrevIcon style={style} />
    </Div2>
  );
}

const Sponsor = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
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
    <div className="site-sponsor">
      <div className="container">
        <div className="sponsor">
            <hr />
          <Slider {...settings}>
            <img className="sponsor-img" src={spons2} alt="" />
            <img className="sponsor-img" src={spons1} alt="" />
            <img className="sponsor-img" src={spons3} alt="" />
            <img className="sponsor-img" src={spons4} alt="" />
            <img className="sponsor-img" src={spons5} alt="" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
