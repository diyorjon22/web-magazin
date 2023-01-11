import React from "react";
import Header from "../components/home_header/header"
import Nav from "../components/home_nav/nav";
import Hero from "../components/home_hero/hero"
import Dostavka from "../components/home_dostavka/dostavka";
import Product from "../components/home_product/product";
import Poligrafiya from "../components/home-poligrafiya/poligrafiya";
import New from "../components/home_new-products/new";
import Blogs from "../components/home_blogs/blogs";
import Sponsor from "../components/home_sponsor/sponsor";
import Footer from "../components/home_footer/footer";
import Footer2 from '../components/home_footer2/footer2'





const Home = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <Hero/>
        <Dostavka/>
        <Product/>
        <Poligrafiya/>
        <New/>
        <Blogs/>
        <Sponsor/>
        <Footer/>
        <Footer2/>
        </>
    );
};

export default Home;