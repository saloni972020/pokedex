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
      <div className=" details-card card poke-card" style={{ width: "35rem" }}>
        <div className="height">
          <div className="detail-header">HEIGHT</div>
          <p>{pokemon.height}</p>
        </div>
        <div className="weight">
          <div className="detail-header">WEIGHT</div>
          <p>{pokemon.weight}</p>
        </div>
        <div className="experience">
          <div className="detail-header">XP</div>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className="abilities">
          <div className="detail-header">ABILITIES</div>
          {pokemon.abilities
            ? pokemon.abilities.map((ab) => (
                <span className="label ability" key={ab.ability.name}>
                  {ab.ability.name}
                </span>
              ))
            : "undefined"}
        </div>
        <div className="types">
          <div className="detail-header">Type</div>
          {pokemon.types
            ? pokemon.types.map((type) => (
                <span className="label type" key={type.type.name}>
                  {type.type.name}
                </span>
              ))
            : "undefined"}
        </div>
      </div>
      {pokemon.moves && pokemon.moves.length !== 0 && (
        <div className="moves details-card card">
          <div className="detail-header">MOVES</div>
          <div className="list-moves">
            {pokemon.moves.map((move) => (
              <span className="move label" key={move.move.name}>
                {move.move.name}
              </span>
            ))}
          </div>
        </div>
      )}
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
