const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://54.174.220.112/api/"
  : "http://54.174.220.112/api/";
