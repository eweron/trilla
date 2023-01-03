import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/";
import type { User } from "@/types";

class UserService {
  async getAll() {
    const response = await axios.get(API_URL + "user/all", {
      headers: authHeader(),
    });
    return response.data;
  }
}

export default new UserService();
