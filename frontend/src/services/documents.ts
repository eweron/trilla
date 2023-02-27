import type { Invoice, Currency } from "@/types";
import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "./api";

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

  async createInvoice(invoice: Invoice) {
    const response = await axios.post(API_URL + "invoice/new", invoice, {
      headers: authHeader(),
    });
    return response.data as Invoice;
  }

  async getAllCurrencies() {
    const response = await axios.get(API_URL + "currency/all", {
      headers: authHeader(),
    });
    return response.data as Currency[];
  }
}

export default new DocumentService();
