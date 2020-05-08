import axios from "axios";

const request = (method = "get", request = "/", payload = {}) => {
  const url = process.env.REACT_APP_API_HOST + request;
  const options = {
    method,
    // headers: { Authorization: token ? `jwt ${token}` : '' },
    url,
    data: payload
  };

  return new Promise((resolve, reject) => {
    axios(options, payload)
      .then(res => resolve(res))
      .catch(error => reject(error));
  });
};

export default request;
