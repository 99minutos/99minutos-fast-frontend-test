import { ADD_CONTAINER } from "../constants";
import produce from "immer";

const initialState = {
  container:{},
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case ADD_CONTAINER: {
        draftState.container = action.payload;
        break;
      }
      default:
        break;
    }
  });
