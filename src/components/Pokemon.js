import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => (
  <div className=" pokemon-card" style={{ width: "240px" }}>
    <Link className="pokeman-detail-link" to={`/${pokemon.id}`}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        className="card-img-top"
        alt="images"
        height="220"
        width="220"
      />
      <div className="card-body">
        <div className="name">{pokemon.name}</div>
      </div>
    </Link>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
