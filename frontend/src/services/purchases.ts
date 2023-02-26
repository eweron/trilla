import type { Purchase } from "@/types";
import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "./api";

class PurchaseService {
  async getAll() {
    const response = await axios.get(API_URL + "purchase/all", {
      headers: authHeader(),
    });
    return response.data;
  }

  async create(purchase: Purchase) {
    const response = await axios.post(API_URL + "purchase/new", purchase, {
      headers: authHeader(),
    });
    return response.data as Array<Purchase>;
  }
}

export default new PurchaseService();
