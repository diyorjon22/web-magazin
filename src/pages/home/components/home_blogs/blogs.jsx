import React from "react";
import "./blogs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from '../../../../assets/images/1.png (1).png'
import blog2 from '../../../../assets/images/2.png (1).png'
import blog3 from '../../../../assets/images/3.png (1).png'
import blog4 from '../../../../assets/images/4.png (1).png'
import { Link } from "react-router-dom";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="site-blog">
        <div className="container">
            <div className="blog-title">
                <h2>From our Latest Blogs</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Slider {...settings}>
                <div className="img-box">
                      <center>
                      <img className="blog-img" src={blog1} alt="" />
                      </center>
                    <Link className="lili">Fashion</Link>
                    <h2>This is first Post For Blog</h2>
                    <p>Posted by <span>HasTech</span>12TH Nov 2023</p>
                </div>
                <div className="img-box">
                    <center>
                    <img className="blog-img" src={blog2} alt="" />
                    </center>
                    <Link className="lili">Fashion</Link>
                    <h2>This is first Post For Blog</h2>
                    <p>Posted by <span>HasTech</span>12TH Nov 2023</p>
                </div>
                <div className="img-box">
                    <center> <img className="blog-img" src={blog3} alt="" /></center>
                    <Link className="lili">Fashion</Link>
                    <h2>This is first Post For Blog</h2>
                    <p>Posted by <span>HasTech</span>12TH Nov 2023</p>
                </div>
                <div className="img-box">
                    <center>
                    <img className="blog-img" src={blog4} alt="" />
                    </center>
                    <Link className="lili">Fashion</Link>
                    <h2>This is first Post For Blog</h2>
                    <p>Posted by <span>HasTech</span>12TH Nov 2023</p>
                </div>
                <div className="img-box">
                    <center>
                    <img className="blog-img" src={blog1} alt="" />
                    </center>
                    <Link className="lili">Fashion</Link>
                    <h2>This is first Post For Blog</h2>
                    <p>Posted by <span>HasTech</span>12TH Nov 2023</p>
                </div>
            </Slider>
            
        </div>
    </div>
  )
};

export default Blogs;
