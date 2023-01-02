const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://3.91.159.55/api/"
  : "http://3.91.159.55/api/";
