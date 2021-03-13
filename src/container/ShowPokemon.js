/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon, getResetPokemon } from "../redux/actions";
import "../styles/ShowPokemon.css";
import LazyImage from "../components/LazyImage";
import Ribbon from "../components/ribbon";
import { typeToColorHex } from "../redux/constants/types";
import Pokemon from "../components/Pokemon";
import Shimmer from "../components/Shimmer";

const ShowPokemon = ({
  pokemon,
  loading,
  getPokemon,
  match,
  getResetPokemon,
}) => {
  const [imageUrl, SetImageUrl] = useState("");
  const [pokeCardStyle, setPokeCardStyle] = useState("#A33EA1");

  useEffect(() => {
    const { id } = match.params;

    getPokemon(id);
    return () => {
      getResetPokemon();
    };
  }, []);
  useEffect(() => {
    if (pokemon && pokemon.sprites) SetImageUrl(pokemon.sprites.front_default);
    if (pokemon && pokemon.types && pokemon.types.length !== 0)
      setPokeCardStyle(typeToColorHex[pokemon.types[0].type.name]);

    // eslint-disable-next-line;
  }, [pokemon]);
  if (!pokemon || loading) return <Shimmer type="card"></Shimmer>;
  else
    return (
      <div className="inline-display">
        <div className=" poke-img">
          {imageUrl && (
            <Ribbon text={pokemon.name} color={pokeCardStyle}></Ribbon>
          )}
          <div className="card centralised-card">
            <LazyImage src={imageUrl} alt="img" style={{ width: "25rem" }} />
          </div>
        </div>

        <div class="pokewidget">
          <div class="pokewidget-types">
            <div class="pokewidget-type">fire</div>
          </div>

          <div class="pokewidget-characteristics">
            <div class="pokewidget-characteristic">
              <div
                class="pokewidget-characteristic-name"
                style={{ color: `${pokeCardStyle}` }}
              >
                height
              </div>
              <div class="pokewidget-characteristic-value">
                {pokemon.height}
              </div>
            </div>
            <div class="pokewidget-characteristic">
              <div
                class="pokewidget-characteristic-name"
                style={{ color: `${pokeCardStyle}` }}
              >
                weight
              </div>
              <div class="pokewidget-characteristic-value">
                {pokemon.weight}
              </div>
            </div>
            <div class="pokewidget-characteristic">
              <div
                class="pokewidget-characteristic-name"
                style={{ color: `${pokeCardStyle}` }}
              >
                Experience
              </div>
              <div class="pokewidget-characteristic-value">
                {pokemon.base_experience}
              </div>
            </div>
          </div>
          <div class="pokewidget-description">
            <div
              class="pokewidget-characteristic-name"
              style={{ color: `${pokeCardStyle}` }}
            >
              abilities
            </div>
            <div class="pokewidget-characteristic-value">
              {pokemon && pokemon.abilities
                ? pokemon.abilities.map((ability) => (
                    <span
                      className="move label"
                      style={{ backgroundColor: `${pokeCardStyle}` }}
                      key={ability.ability.name}
                    >
                      {ability.ability.name}
                    </span>
                  ))
                : "-"}
            </div>
          </div>

          <div class="pokewidget-stat-container">
            <div class="pokewidget-stat-values">
              {pokemon && pokemon.stats
                ? pokemon.stats.map((stat) => (
                    <div
                      class="pokewidget-stat-value"
                      style={{
                        height: `${stat.base_stat}%`,
                        backgroundColor: `${pokeCardStyle}`,
                      }}
                    ></div>
                  ))
                : null}
              {/* <div
                class="pokewidget-stat-value"
                style={{ height: "32.5%", backgroundColor: `${pokeCardStyle}` }}
              ></div>
              <div
                class="pokewidget-stat-value"
                style={{ height: "32.5%", backgroundColor: `${pokeCardStyle}` }}
              ></div>
              <div
                class="pokewidget-stat-value"
                style={{ height: "32.5%", backgroundColor: `${pokeCardStyle}` }}
              ></div>
              <div
                class="pokewidget-stat-value"
                style={{ height: "32.5%", backgroundColor: `${pokeCardStyle}` }}
              ></div>
              <div
                class="pokewidget-stat-value"
                style={{ height: "32.5%", backgroundColor: `${pokeCardStyle}` }}
              ></div>
              <div
                class="pokewidget-stat-value"
                style={{ height: "32.5%", backgroundColor: `${pokeCardStyle}` }}
              ></div> */}
            </div>
            <div class="pokewidget-stat-names">
              {pokemon && pokemon.stats
                ? pokemon.stats.map((stat) => (
                    <div class="pokewidget-stat-name">{stat.stat.name}</div>
                  ))
                : null}
            </div>
          </div>
        </div>
        {pokemon.moves && pokemon.moves.length !== 0 && (
          <div className="moves details-card card">
            <div
              className="detail-header"
              style={{ color: `${pokeCardStyle}` }}
            >
              MOVES
            </div>
            <div className="list-moves">
              {pokemon.moves.map((move) => (
                <span
                  className="move label"
                  style={{ backgroundColor: `${pokeCardStyle}` }}
                  key={move.move.name}
                >
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
  pokemon: PropTypes.object,
  getPokemon: PropTypes.func.isRequired,
  getResetPokemon: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  pokemon: state.pokemon.pokemon,
  loading: state.pokemon.loading,
});

export default connect(mapStateToProp, { getPokemon, getResetPokemon })(
  ShowPokemon
);
