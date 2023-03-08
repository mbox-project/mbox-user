const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://34.199.115.184/api"
  : "http://34.199.115.184/api";
