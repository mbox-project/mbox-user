import axios from "axios";

//const baseURL = "http://52.2.104.53/api/";
export const baseURL = "https://backend.marketbox.ng/api/";

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
  console.error('Interceptor error:', error);
  return Promise.reject(error);
});


export const getApi = async (url) => {
  try {
    return await api.get(url, {
      headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? sessionStorage.getItem("token") : null}`,
      },
    });
  } catch (error) {
    console.error('Error in getApi:', error);
    throw error;
  }
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
export const putApi = (url, body) => {
  return api.put(url, body, {
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
