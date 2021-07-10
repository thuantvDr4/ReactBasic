import React from "react";
import "./SearchBox.styles.css";

export const SearchBox = ({ handleChange, placeholder = "" }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={(ev) => handleChange(ev.target.value)}
    />
  );
};
