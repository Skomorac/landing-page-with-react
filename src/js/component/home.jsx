import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import MainPage from "./MainPage";
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
	  <Footer/>
    </div>
  );
};

export default Home;
