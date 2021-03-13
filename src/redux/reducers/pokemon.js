import {
  GET_POKEMONS,
  GET_POKEMON,
  POKEMONS_RESET,
} from "../constants/actionTypes";

const initialState = {
  pokemons: [],
  pokemon: {},
  loading: true,
  count: 0,
  next: null,
  previous: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        next: action.next,
        previous: action.previous,
        count: action.count,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case POKEMONS_RESET:
      return {
        pokemons: [],
        loading: true,
        next: "",
        previous: "",
        count: 0,
      };
    default:
      return state;
  }
}
