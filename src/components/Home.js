import React from "react";
import Navbar from "./Home/Navbar/Default/Navbar";
import Hero from "./Home/Layout/Hero";
import Service from "./Home/Layout/Service";
import Footer from "./Home/Layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
