import { ADD_CONTAINER, END_CONTAINERS, START_CONTAINERS } from "../constants";
import { ContainerService } from "../services";

export const containersActions = {
  getContainers,
  addContainer,
};

function getContainers() {
  return (dispatch) => {
    dispatch(request());

    ContainerService.getContainer().then(
      (containers) => {
        dispatch(success(containers));
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

function addContainer(order) {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTAINER,
      payload: order,
    });
  };
}

function request() {
  return {
    type: START_CONTAINERS,
    payload: null,
  };
}

function success(containers) {
  return {
    type: END_CONTAINERS,
    payload: containers,
  };
}
