import { combineReducers } from "redux";
import pokemon from "./pokemon";
import totalCount from "./countTotal";
import filter from "./filter";

export default combineReducers({ pokemon, filter, totalCount });
