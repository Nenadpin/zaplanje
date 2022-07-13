import React from "react";
import bee from "../images/bee.jpg";
import queen from "../images/queen.jpg";
import Drone from "../images/Drone.jpg";
import { useState } from "react";
import honey from "../images/honey.jfif";
import honey2 from "../images/honey2.jfif";
import okImg from "../images/ok.png";

const Start = ({
  data,
  bagrem,
  setBagrem,
  livada,
  setLivada,
  setOrder,
  setOrderBody,
}) => {
  const [info, setInfo] = useState(0);

  const handleOrder = () => {
    if (Number(bagrem) !== 0 || Number(livada) !== 0) {
      setOrder(true);
      setOrderBody(
        `Bagremov med: ${bagrem} kg, livadski med: ${livada} kg. Ukupan iznos za placanje: ${
          bagrem * 1200 + livada * 1000
        } din`
      );
    } else alert("Vasa korpa je prazna!");
  };
  const sendEmail = () => {
    window.location = "mailto:nenadpin@yahoo.com";
  };

  return (
    <div className="start">
      {info === 1 ? (
        <div className="productDetails">
          <img className="btn" src={bee} alt="" onClick={() => setInfo(0)} />
          <div className="honey">
            <div className="honey">
              <img
                style={{ height: "115px", width: "75px" }}
                src={honey}
                alt=""
              />
              <label>Bagrem: 1200din/kg</label>
              <input
                type="number"
                value={bagrem}
                onChange={(e) => setBagrem(e.target.value)}
              ></input>
            </div>
            <div className="honey">
              <img
                style={{ height: "115px", width: "75px" }}
                src={honey2}
                alt=""
              />
              <label>Livadski: 1000din/kg</label>
              <input
                type="number"
                value={livada}
                onChange={(e) => setLivada(e.target.value)}
              ></input>
            </div>
            <hr style={{ width: "90%" }}></hr>
            <div className="total">
              <label>Ukupno: {bagrem * 1200 + livada * 1000}</label>
              <img className="ok" src={okImg} alt="" onClick={handleOrder} />
            </div>
          </div>
        </div>
      ) : (
        <div className="products">
          <img className="btn" src={bee} alt="" onClick={() => setInfo(1)} />
          <p className="menu">Pcelinji proizvodi</p>
        </div>
      )}
      {info === 2 ? (
        <div className="productDetails">
          <img className="btn" src={queen} alt="" onClick={() => setInfo(0)} />
          <p className="details">
            {data.data2}
            <span className="email" onClick={() => sendEmail()}>
              nenadpin@yahoo.com
            </span>
          </p>
        </div>
      ) : (
        <div className="queen">
          <img className="btn" src={queen} alt="" onClick={() => setInfo(2)} />
          <p className="menu">Matice i rojevi</p>
        </div>
      )}
      {info === 3 ? (
        <div className="productDetails">
          <img className="btn" src={Drone} alt="" onClick={() => setInfo(0)} />
          <p className="details">
            {data.data3}
            <a
              className="email"
              href="https://pcelinjak.netlify.app"
              target="blank"
            >
              PCELINJAK
            </a>
          </p>
        </div>
      ) : (
        <div className="about">
          <img className="btn" src={Drone} alt="" onClick={() => setInfo(3)} />
          <p className="menu">Informacije o nama</p>
        </div>
      )}
    </div>
  );
};

export default Start;
