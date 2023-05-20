import axios from "axios";

const baseURL = "http://34.199.115.184:8004/api/";

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
const checkwalletreq = axios.create({
  baseURL: "http://34.199.115.184:8004/api/Wallet/checkalreadyhaswallet/",
});
checkwalletreq.interceptors.response.use(undefined, function (error) {
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

const createWallet = async (email) => {
  const response = await axios.post(
    "http://34.199.115.184:8004/api/Wallet/create",
    {
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${
          typeof window !== undefined ? sessionStorage.getItem("token") : null
        }`,
      },
    }
  );
  return response.data;
};

checkwalletreq.interceptors.response.use(undefined, function (error) {
  console.log(error);
  if (error.response.status === 404) {
    const originalRequest = error.config;
    console.log("interceptor", error);
    return createWallet(originalRequest.url).then((res) => {
      console.log(res, "20");
      return axios(originalRequest).then((res) => {
        console.log(res, "90");
      });
    });
  }
  return Promise.reject(error);
});

export const checkwalletApi = (email) => {
  return checkwalletreq.get(`${email}`, {
    headers: {
      Authorization: `Bearer ${
        typeof window !== undefined ? sessionStorage.getItem("token") : null
      }`,
    },
  });
};

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
