import axios from "axios";

const baseURL = "http://ec2-3-208-29-158.compute-1.amazonaws.com/api/";

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(undefined, function (error) {
  error.originalMessage = error.message;
  Object.defineProperty(error, "message", {
    get: function () {
      if (!error.response) {
        return error.originalMessage;
      }
      return error.response.data.message?.toString();
    },
  });
  return Promise.reject(error);
});

export const getApi = (url) => {
  return api.get(url, {
    headers: {
      Authorization: `Bearer ${
        typeof window !== undefined ? sessionStorage.getItem("token") : null
      }`,
    },
  });
};

export const postApi = (url, body) => {
  return api.post(url, body, {
    headers: {
      Authorization: `Bearer ${
        typeof window !== undefined ? sessionStorage.getItem("token") : null
      }`,
    },
  });
};

export const patchApi = (url, body) => {
  return api.patch(url, body, {
    headers: {
      Authorization: `Bearer ${
        typeof window !== undefined ? sessionStorage.getItem("token") : null
      }`,
    },
  });
};
