import React from "react";
import "./CardList.styles.css";
import { Card } from "../card/CardItem.Component";

export const CardList = ({ children, monsters }) => {
  return (
    <div className="card-list">
      {monsters &&
        monsters.map((monster, index) => {
          return <Card key={"key:" + index} card={monster} />;
        })}
    </div>
  );
};
