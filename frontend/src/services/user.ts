import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "./api";

class UserService {
  async getAll() {
    const response = await axios.get(API_URL + "user/all", {
      headers: authHeader(),
    });
    return response.data;
  }
}

export default new UserService();
