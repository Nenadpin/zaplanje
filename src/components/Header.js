import React from "react";
import buy from "../images/buy.png";

const Header = ({ order, setOrder }) => {
  return (
    <div className="header">
      <img id="orderBtn" src={buy} alt="" onClick={() => setOrder(!order)} />
      Pcelarstvo Stamenkovic
      <span>
        <a href="tel:0641227779">064 1227779</a>
      </span>
    </div>
  );
};

export default Header;
