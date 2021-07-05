import { ContainerService } from "../services";

export const containersActions = {
    getContainers
}

function getContainers() {
  ContainerService.getContainer().then((containers) => {
    console.log("containrs ok: ", containers);
  },
  (error)=> {
      console.log('==error: ==========');
      console.log(error);
      console.log('====================================');
  });
}
