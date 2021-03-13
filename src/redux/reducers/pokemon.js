import {
  GET_POKEMONS,
  GET_POKEMON,
  POKEMONS_RESET,
  POKEMONS_ERR,
} from "../constants/actionTypes";

const initialState = {
  pokemons: [],
  pokemon: {},
  loading: true,
  count: 0,
  next: null,
  previous: null,
  isErr: false,
  err: {},
};

export default function (state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        next: action.next,
        previous: action.previous,
        count: action.count,
        isErr: false,
        err: {},
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
        isErr: false,
        err: {},
      };
    case POKEMONS_RESET:
      return {
        pokemons: [],
        loading: true,
        next: "",
        previous: "",
        count: 0,
        isErr: false,
        err: {},
      };
    case POKEMONS_ERR:
      return {
        pokemons: [],
        pokemon: {},
        loading: false,
        count: 0,
        next: null,
        previous: null,
        isErr: true,
        err: action.payload,
      };
    default:
      return state;
  }
}
