import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import Start from "./Start";
import Order from "./Order";
import data from "../data.json";

const Main = ({ order, setOrder }) => {
  const [bagrem, setBagrem] = useState(0);
  const [livada, setLivada] = useState(0);
  const [orderBody, setOrderBody] = useState("");
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src={img1}
      className="sliderimg"
      onDragStart={handleDragStart}
      alt=""
      style={{ borderRadius: "15px" }}
    />,
    <img
      src={img2}
      className="sliderimg"
      onDragStart={handleDragStart}
      alt=""
      style={{ borderRadius: "15px" }}
    />,
    <img
      src={img3}
      className="sliderimg"
      onDragStart={handleDragStart}
      alt=""
      style={{ borderRadius: "15px" }}
    />,
    <img
      src={img4}
      className="sliderimg"
      onDragStart={handleDragStart}
      alt=""
      style={{ borderRadius: "15px" }}
    />,
    <img
      src={img5}
      className="sliderimg"
      onDragStart={handleDragStart}
      alt=""
      style={{ borderRadius: "15px" }}
    />,
  ];

  return (
    <>
      <div id="slider">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          disableDotsControls
          animationType="fadeout"
          animationDuration={1000}
          disableButtonsControls
        />
      </div>
      {!order ? (
        <Start
          data={data}
          bagrem={bagrem}
          setBagrem={setBagrem}
          livada={livada}
          setLivada={setLivada}
          setOrder={setOrder}
          setOrderBody={setOrderBody}
        />
      ) : (
        <Order
          data={data}
          orderBody={orderBody}
          setOrderBody={setOrderBody}
          setOrder={setOrder}
          bagrem={bagrem}
          livada={livada}
        />
      )}
    </>
  );
};

export default Main;
