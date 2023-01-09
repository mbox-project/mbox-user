const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://54.161.10.20/api/"
  : "ttp://54.161.10.20/api/";
