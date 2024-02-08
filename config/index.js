const dev = process.env.NODE_ENV !== "production";
export const API_URL = dev
  ? "http://52.2.104.53/api/"
  : "http://52.2.104.53/api/";
