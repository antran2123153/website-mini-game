import axios from "axios";

const instance = axios.create({
  baseURL: "https://gamevvbe.vercel.app",
});

export default instance;
