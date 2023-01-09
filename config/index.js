const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://54.221.10.33/api/"
  : "http://54.221.10.33/api/";
