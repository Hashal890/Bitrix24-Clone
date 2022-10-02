import React from "react";
import HomeBottom from "../Components/HomeBottom";
import HomeFooter from "../Components/HomeFooter";
import HomeMiddle from "../Components/HomeMiddle";
import HomeNavbar from "../Components/HomeNavbar";
import HomeTop from "../Components/HomeTop";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
      <HomeFooter />
    </>
  );
};

export default Home;
