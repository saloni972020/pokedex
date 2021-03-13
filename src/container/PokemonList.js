/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPokemons, changeFilter, getResetPokemon } from "../redux/actions";
import Pokemon from "../components/Pokemon";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import Shimmer from "../components/Shimmer";

const PokemonList = ({
  getPokemons,
  pokemons,
  changeFilter,
  filter,
  next,
  previous,
}) => {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    getPokemons(currentPageUrl);
    // eslint-disable-next-line
  }, [currentPageUrl]);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    changeFilter(value);
  };

  function gotoNextPage() {
    setCurrentPageUrl(next);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(previous);
  }

  const filteredPokemons = () =>
    filter === "ALL"
      ? pokemons
      : pokemons.filter((pokemon) => {
          const arr = pokemon.types;

          for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].type.name === filter) return true;
          }
          return false;
        });
  console.log({ pokemons }, { next }, { previous });

  return pokemons === null ? (
    <Shimmer type="list"></Shimmer>
  ) : (
    <div>
      {/* <CategoryFilter handleChange={handleFilterChange} /> */}
      <div className="pokemon-listing">
        {filteredPokemons().map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        gotoNextPage={next ? gotoNextPage : null}
        gotoPrevPage={previous ? gotoPrevPage : null}
      />
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  getPokemons: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemon.pokemons,
  filter: state.filter,
  next: state.pokemon.next,
  previous: state.pokemon.previous,
});

export default connect(mapStateToProps, { getPokemons, changeFilter })(
  PokemonList
);
