const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://107.23.126.161/api/"
  : "http://107.23.126.161/api/";
