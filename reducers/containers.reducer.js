import { END_CONTAINERS, START_CONTAINERS } from "../constants";
import produce from "immer";

const initialState = {
  containers: [],
  loading: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case START_CONTAINERS: {
        draftState.containers = [];
        draftState.loading = true;
        break;
      }
      case END_CONTAINERS: {
        draftState.containers = action.payload;
        draftState.loading = false;
        break;
      }
      default:
        break;
    }
  });
