const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://54.205.3.132/api"
  : "http://54.205.3.132/api";
