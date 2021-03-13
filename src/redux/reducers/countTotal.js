import { TOTAL_COUNT } from "../constants/actionTypes";

export default function (details = 0, action) {
  switch (action.type) {
    case TOTAL_COUNT:
      return action.payload;
    default:
      return details;
  }
}
