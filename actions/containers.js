import { ADD_CONTAINER } from "../constants";
import { ContainerService } from "../services";

export const containersActions = {
  getContainers,
  addContainer,
};

function getContainers() {
  let containers = ContainerService.getContainer().then(
    (containers) => {
      return containers;
    },
    (error) => {
      console.log("==error: ==========");
      console.log(error);
    }
  );
  return containers;
}

function addContainer(order) {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTAINER,
      payload: order,
    });
  };
}
