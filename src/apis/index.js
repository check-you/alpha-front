import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_ENDPOINT}`,
  timeout: 100000000000,
  headers: {
    "Content-Type": "application/json",
  },
});

const { REACT_APP_SERVER_PORT } = process.env;
console.log("REACT_APP_SERVER_PORT", REACT_APP_SERVER_PORT);

// Assign default value if REACT_APP_SERVER_PORT is undefined
const baseURL = REACT_APP_SERVER_PORT;

// Create axios instance
const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
