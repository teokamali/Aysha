import axios from "axios";
import Cookie from "js-cookie";
import { config, constans } from "../values";
const instance = axios.create({ baseURL: config.BASE_URL });
instance.defaults.headers.common["Authorization"] =
  "Bearer " + Cookie.get(constans.TOKEN);
export default instance;
