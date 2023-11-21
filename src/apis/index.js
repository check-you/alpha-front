import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_SERVER_PORT}`,
  timeout: 100000000000,
  headers: {
    "Content-Type": "application/json",
  },
});
