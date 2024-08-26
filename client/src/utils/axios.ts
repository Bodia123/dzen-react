import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios, {
  ttl: 1000 * 60 * 60,
  // cache: 'no-cache',
});

axios.interceptors.request.use((config) => {
  config.baseURL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
  return config;
});

export default axios;
