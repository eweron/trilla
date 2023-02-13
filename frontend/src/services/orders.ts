import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/";

class OrderService {
  async getAll() {
    const response = await axios.get(API_URL + "order/all", {
      headers: authHeader(),
    });
    return response.data;
  }
}

export default new OrderService();
