import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_POKEMON_RESET,
} from "../constants/actionTypes";

const initialState = {
  pokemons: [],
  pokemon: {},
  loading: true,
};

export default function (state = initialState, action) {
  console.log(action);
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
    case GET_POKEMON_RESET:
      return initialState;
    default:
      return state;
  }
}
