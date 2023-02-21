import type { Counterparty } from "@/types";
import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "./api";

class CounterpartyService {
  async getAll() {
    const response = await axios.get(API_URL + "counterparty/all", {
      headers: authHeader(),
    });
    return response.data;
  }

  async create(counterparty: Counterparty) {
    const response = await axios.post(
      API_URL + "counterparty/new",
      counterparty,
      {
        headers: authHeader(),
      }
    );
    return response.data as Array<Counterparty>;
  }
}

export default new CounterpartyService();
