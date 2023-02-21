import axios from "axios";
import type { User } from "../types";
import API_URL from "./api";

class AuthService {
  async login(user: User) {
    const response = await axios.post(API_URL + "auth/signin", {
      username: user.username,
      password: user.password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user: User) {
    return axios.post(API_URL + "auth/signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
