import React from "react";

import Navbar from "./Home/Navbar/Navbar";
import Hero from "./Home/Hero";

const Home = () => {
  return (
    <div>
      <Navbar user={true} />
      <Hero />
    </div>
  );
};

export default Home;
