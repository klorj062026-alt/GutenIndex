import axios from "axios";

export const api_guten = axios.create({
  baseURL: import.meta.env.VITE_GUTEN_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
