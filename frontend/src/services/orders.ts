import type { Order } from "@/types";
import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "./api";

class OrderService {
  async getAll() {
    const response = await axios.get(API_URL + "order/all", {
      headers: authHeader(),
    });
    return response.data;
  }

  async create(order: Order) {
    const response = await axios.post(API_URL + "order/new", order, {
      headers: authHeader(),
    });
    return response.data as Array<Order>;
  }
}

export default new OrderService();
