import { message } from "antd";
import axios from "axios";
import Router from "next/router";

export const baseURL = "https://marketbox-api.onrender.com/api/";

const api = axios.create({
  baseURL,
});

// Flag to prevent multiple network alerts
let networkErrorAlerted = false;

// Add a request interceptor to check for the token
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found. Redirecting to login.");
      if (typeof window !== "undefined") {
        Router.push("/auth/login");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error") {
      // Network error (no response from server)
      if (!networkErrorAlerted) {
        networkErrorAlerted = true;
        message.warning(
          "Network error. Please check your internet connection."
        );
        //alert("Network error. Please check your internet connection.");
        // Reset the flag after a delay to allow future alerts
        setTimeout(() => {
          networkErrorAlerted = false;
        }, 10000); // 5 seconds debounce
      }
    } else if (
      error.response?.status === 401 &&
      typeof window !== "undefined"
    ) {
      console.warn("Unauthorized. Redirecting to login.");
      Router.push("/auth/login");
    }
    return Promise.reject(error);
  }
);

export const getApi = async (url) => {
  try {
    return await api.get(url);
  } catch (error) {
    console.error("Error in getApi:", error);
    throw error;
  }
};

export const postApi = (url, body) => {
  return api.post(url, body);
};

export const patchApi = (url, body) => {
  return api.patch(url, body);
};

export const putApi = (url, body) => {
  return api.put(url, body);
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
