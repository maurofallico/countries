import PropTypes from "prop-types";
import styled from "./NavBar.module.css";
import { useState, useEffect } from "react";

export default function NavBar({ searchCountry, orderCountry }) {
  const handleOrder = (e) => {
    orderCountry(e.target.value);
  };

  const [country, setCountry] = useState("");
  const [activity, setActivity] = useState("");

  useEffect(() => {
    searchCountry(country);
  }, [country]);

  const countryChange = (e) => {
    const inputCountry = e.target.value;
    setCountry(inputCountry);
  };


  return (
    <div className={styled.container}>
      
      <label className={styled.labelOrdenar}>
        <strong>Order:</strong>
        <select className={styled.select} name="order" onChange={handleOrder}>
          <option value="nameUp">Name (A-Z)</option>
          <option value="nameDown">Name (Z-A)</option>
          <option value="menorPop">Min Population</option>
          <option value="mayorPop">Max Population</option>
        </select>
      </label>
      <label className={styled.labelPais}>
        <strong>Country:</strong>
      <input
        className={styled.input}
        type="search"
        placeholder="Find a country..."
        value={country}
        onChange={countryChange}
      />
      </label>

      <button className = {styled.button}>Add Activity</button>

      
    </div>
  );
}

NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
