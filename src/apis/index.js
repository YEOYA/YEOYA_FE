import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000,
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});
