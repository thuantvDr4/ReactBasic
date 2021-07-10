import React from "react";
import "./CardItem.styles.css";

export const Card = ({ card }) => {
  return (
    <div className="cart-container">
      <img
        alt="monster"
        src={`https://robohash.org/${card.id}?set=set2&size=180x180`}
      />
      <h2>{card && card.name}</h2>
      <p>{card && card.email}</p>
    </div>
  );
};
