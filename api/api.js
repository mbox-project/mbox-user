import axios from "axios";

const api = axios.create({
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined" ? sessionStorage.getItem("token") : null
    }`,
  },
});

export const getApi = (url) => {
  return api.get(url);
};

export const postApi = (url, body) => {
  return api.post(url, body);
};
