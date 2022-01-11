import axios from "axios";

const instance = axios.create({
  baseURL: "https://gamevvbe.herokuapp.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
