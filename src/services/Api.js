import axios from "axios";

const Api = axios.create({
  baseURL: "https://bootcamp-rent-car.herokuapp.com",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  mode: 'no-cors',
  credentials: true,
  crossdomain: true,
});

function ApiGetRequest(url, data) {
  return Api.get(url, {
    params: data,
  })
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error: (error.response && error.response.data.message) || error,
      };
    });
}

export { ApiGetRequest };
