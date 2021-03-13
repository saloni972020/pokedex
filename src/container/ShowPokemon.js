/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon, getResetPokemon } from "../redux/actions";
import "../styles/ShowPokemon.css";
import LazyImage from "../components/LazyImage";
import Ribbon from "../components/ribbon";

const ShowPokemon = ({ pokemon: { pokemon, loading }, getPokemon, match }) => {
  const [imageUrl, SetImageUrl] = useState("");

  useEffect(() => {
    const { id } = match.params;
    getPokemon(id);
    return () => {
      SetImageUrl("");
      getResetPokemon();
    };
  }, []);
  useEffect(() => {
    console.log("i am called", pokemon, loading);
    if (pokemon && pokemon.sprites) SetImageUrl(pokemon.sprites.front_default);
    // eslint-disable-next-line;
  }, [pokemon]);

  return pokemon && loading === null ? (
    <h1>loading...</h1>
  ) : (
    <div className="inline-display">
      <div className=" poke-img">
        {imageUrl && <Ribbon text={pokemon.name}></Ribbon>}
        <div className="card centralised-card">
          <LazyImage src={imageUrl} alt="img" style={{ width: "25rem" }} />
        </div>
      </div>
      <div className=" card poke-card" style={{ width: "35rem" }}>
        <div className="height">
          <h3>HEIGHT</h3>
          <p>{pokemon.height}</p>
        </div>
        <div className="weight">
          <h3>WEIGHT</h3>
          <p>{pokemon.weight}</p>
        </div>
        <div className="experience">
          <h3>XP</h3>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className="abilities">
          <h3>ABILITIES</h3>
          {pokemon.abilities
            ? pokemon.abilities.map((ab) => (
                <span className="ability" key={ab.ability.name}>
                  {ab.ability.name}
                </span>
              ))
            : "undefined"}
        </div>
        <div className="types">
          <h3>Type</h3>
          {pokemon.types
            ? pokemon.types.map((type) => (
                <span className="type" key={type.type.name}>
                  {type.type.name}
                </span>
              ))
            : "undefined"}
        </div>
      </div>
      <div className="moves mt-3 p-2 card">
        <h3>MOVES</h3>
        <div className="list-moves">
          {pokemon.moves
            ? pokemon.moves.map((move) => (
                <span className="move" key={move.move.name}>
                  {move.move.name}
                </span>
              ))
            : "undefined"}
        </div>
      </div>
      <Link to="/" className="text-center">
        <button type="button">Back to list</button>
      </Link>
    </div>
  );
};

ShowPokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
  getPokemon: PropTypes.func.isRequired,
  getResetPokemon: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProp, { getPokemon, getResetPokemon })(
  ShowPokemon
);
