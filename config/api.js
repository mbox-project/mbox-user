import axios from "axios";

//const baseURL = "http://52.2.104.53/api/";
const baseURL = "http://ec2-13-51-167-181.eu-north-1.compute.amazonaws.com:5005/api/";

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
      return error.response.data?.message?.toString();
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
export const deleteApi = (url, body) => {
  return api.delete(url, body, {
    headers: {
      Authorization: `Bearer ${
        typeof window !== undefined ? sessionStorage.getItem("token") : null
      }`,
    },
  });
};

export default baseURL;
