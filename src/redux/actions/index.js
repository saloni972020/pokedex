/* eslint-disable import/prefer-default-export */
import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON,
  CHANGE_FILTER,
  TOTAL_COUNT,
  POKEMONS_RESET,
} from "../constants/actionTypes";

export const getPokemons = (offset) => async (dispatch) => {
  try {
    console.log(offset, "check");
    const allPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    const pokemonData = await Promise.all(
      allPokemon.data.results.map(async (pokemon) => {
        const pokemonRecord = await axios.get(pokemon.url);
        return pokemonRecord.data;
      })
    );
    dispatch({
      type: GET_POKEMONS,
      payload: pokemonData,
      next: allPokemon.data.next,
      previous: allPokemon.data.previous,
      count: allPokemon.data.count,
    });
  } catch (err) {
    dispatch({
      err,
    });
  }
};
const getTotalCount = (count) => (dispatch) => {
  dispatch({ type: TOTAL_COUNT, payload: count });
};

export const getCount = () => (dispatch) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon`)
    .then((data) => dispatch(getTotalCount(data.data.count)));

export const getPokemon = (id) => async (dispatch) => {
  try {
    console.log("check in single");
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      err,
    });
  }
};
export const getResetPokemon = () => (dispatch) => {
  dispatch({
    type: POKEMONS_RESET,
  });
};
export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
