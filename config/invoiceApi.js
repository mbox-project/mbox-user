import axios from "axios";
import { AiOutlineSafety } from "react-icons/ai";

const baseURL = "http://34.199.115.184:8004/api/wallet/";

const api = axios.create({
  baseURL,
});

const checkwalletreq = axios.create({
  baseURL: "http://34.199.115.184:8004/api/Wallet/checkalreadyhaswallet/",
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
