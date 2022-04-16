import axios from "axios";
import routes from "./routes";
import Cookies from "js-cookie";
import { constans } from "../values";
const login = async (username, password) => {
  try {
    const resLogin = await axios.post(routes.login, {
      username,
      password,
    });
    Cookies.set(constans.TOKEN, resLogin.data.result.token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default login;
