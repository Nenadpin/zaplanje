import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Order = ({ setOrder, orderBody, setOrderBody, bagrem, livada, data }) => {
  const [user, setUser] = useState("");
  const [customers, setCustomers] = useState([]);
  const [userTel, setUserTel] = useState("");
  const [admin, setAdmin] = useState("");

  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await getDocs(usersRef);
        setCustomers(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersRef, {
        name: user,
        email: userTel,
        porudzbina: orderBody,
      });
    } catch (err) {
      alert("Desila se greska na serveru. Pokusajte ponovo.");
    } finally {
      alert(
        "Zahvaljujemo se na Vasoj porudzbini. Bicete uskoro kontaktirani..."
      );
      setOrder(false);
      setOrderBody("");
    }
  };
  return (
    <>
      {admin !== process.env.REACT_APP_PASS ? (
        <>
          {orderBody ? (
            <div className="order">
              <h2>Porudzbina proizvoda</h2>
              <form className="orderForm" onSubmit={handleSubmit}>
                <label htmlFor="userID">Ime i prezime:</label>
                <input
                  id="userID"
                  type="text"
                  value={user}
                  required
                  onChange={(e) => {
                    setUser(e.target.value.toString());
                  }}
                />
                <label htmlFor="userTel">
                  e-mail adresa ili broj telefona:
                </label>
                <input
                  id="userTel"
                  type="text"
                  value={userTel}
                  required
                  onChange={(e) => {
                    setUserTel(e.target.value.toString());
                  }}
                />
                <label htmlFor="orderBody">Detalji orudzbine:</label>
                <textarea
                  id="orderBody"
                  required
                  value={orderBody}
                  onChange={(e) => setOrderBody(e.target.value)}
                />
                <button type="submit">Potvrdi</button>
              </form>
            </div>
          ) : (
            <div
              style={{
                margin: "auto",
                justifyContent: "center",
                flexDirection: "column",
              }}
              className="productDetails"
            >
              VASA KORPA JE PRAZNA...
              <hr></hr>
              <span className="back" onClick={() => setOrder(false)}>
                Vratite se nazad
              </span>
              <hr></hr>
              <label>Admin login:</label>
              <input
                type="password"
                value={admin}
                onChange={(e) => {
                  setAdmin(e.target.value);
                }}
              ></input>
            </div>
          )}
        </>
      ) : (
        <div
          className="productDetails"
          style={{
            display: "block",
            borderRadius: "5px",
            overFlowY: "auto",
            justifyContent: "left",
            paddingLeft: "10px",
          }}
        >
          {customers.map((x) => {
            return (
              <div key={x.id}>
                <p style={{ fontWeight: "bold" }}>
                  Ime: {x.name} kontakt: {x.email}
                </p>
                <p>Porudzbina: {x.porudzbina}</p>
                <hr style={{ width: "80%" }}></hr>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Order;
