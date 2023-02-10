import axios from "axios";

const api = axios.create({
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export const getApi = (url) => {
  return api.get(url);
};

export const postApi = (url, body) => {
  return api.post(url, body);
};
