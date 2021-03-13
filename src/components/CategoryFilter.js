import React from "react";
import PropTypes from "prop-types";
import { pokeTypes } from "../redux/constants/types";

const CategoryFilter = ({ handleChange }) => (
  <div className="text-center">
    <select name="type" onChange={handleChange}>
      <option value="ALL">ALL</option>
      {pokeTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
