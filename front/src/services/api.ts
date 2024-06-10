import axios from "axios";
import { MY_IP } from "@env";

const api = axios.create({
  baseURL: `http://${MY_IP}:3333`,
});

export default api;
