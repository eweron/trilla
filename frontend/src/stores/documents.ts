import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import DocumentService from "@/services/documents";
import type { Currency, Invoice } from "@/types";

export const useDocumentsStore = defineStore("documents", () => {
  const invoices: Ref<Array<Invoice> | null> = ref([]);
  const currencies: Ref<Array<Currency> | null> = ref([]);

  async function fetchAllInvoices() {
    invoices.value = await DocumentService.getAllInvoices();
  }

  async function fetchInvoicesByOrder(id: number) {
    invoices.value = await DocumentService.getInvoicesByOrderId(id);
  }

  async function fetchAllCurrencies() {
    currencies.value = await DocumentService.getAllCurrencies();
  }

  async function invoiceCreate(invoice: Invoice) {
    const newInvoice = await DocumentService.createInvoice(invoice);
    newInvoice.orderId && fetchInvoicesByOrder(newInvoice.orderId);
  }

  return {
    invoices,
    currencies,
    fetchAllInvoices,
    invoiceCreate,
    fetchInvoicesByOrder,
    fetchAllCurrencies,
  };
});
