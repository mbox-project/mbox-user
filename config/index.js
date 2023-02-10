const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://54.91.189.89//api/"
  : "http://54.91.189.89//api/";
