import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const MainPage = () => {
  return (
    <div className="container" id="MainPage">
      <Jumbotron />
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <Card
          imageUrl=""
          title="Card number 1"
          text="With supporting text below as a natural lead-in to additional content 1."
          btnText="Go somewhere 1"
        />
        <Card
          imageUrl=""
          title="Card number 2"
          text="With supporting text below as a natural lead-in to additional content 2."
          btnText="Go somewhere 2"
        />
        <Card
          imageUrl=""
          title="Card number 3"
          text="With supporting text below as a natural lead-in to additional content 3."
          btnText="Go somewhere 3"
        />
        <Card
          imageUrl=""
          title="Card number 4"
          text="With supporting text below as a natural lead-in to additional content 4."
          btnText="Go somewhere 4"
        />
      </div>
    </div>
  );
};

export default MainPage;
