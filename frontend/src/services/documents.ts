import type { Invoice } from "@/types";
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/";

class DocumentService {
  async getAllInvoices() {
    const response = await axios.get(API_URL + "invoice/all", {
      headers: authHeader(),
    });
    return response.data as Invoice[];
  }

  async getInvoicesByOrderId(id: number) {
    const response = await axios.get(API_URL + "invoice/by_order", {
      headers: authHeader(),
      params: {
        id,
      },
    });
    return response.data as Invoice[];
  }

  async createInvoice(orderId?: number) {
    const response = await axios.post(API_URL + "invoice/new", orderId, {
      headers: authHeader(),
    });
    return response.data as Invoice;
  }
}

export default new DocumentService();
