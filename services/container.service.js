import { API_URL } from "../config/config";

export const ContainerService = {
  getContainer,
};


function getContainer() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${API_URL}/containers`, options)
    .then(handleResponse)
    .then((containers) => {
      return containers;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    if (!response.ok) {
      // const error = data && data.mensajes;
      return Promise.reject("error");
    }

    return data;
  });
}
