import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_ENDPOINT}`,
  timeout: 10000000,
  headers: {
    "Content-Type": "application/json",
  },
});
