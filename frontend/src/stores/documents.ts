import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import DocumentService from "@/services/documents";
import type { Invoice } from "@/types";

export const useDocumentsStore = defineStore("documents", () => {
  const invoices: Ref<Array<Invoice> | null> = ref([]);

  async function fetchAllInvoices() {
    invoices.value = await DocumentService.getAllInvoices();
  }

  async function fetchInvoicesByOrder(id: number) {
    invoices.value = await DocumentService.getInvoicesByOrderId(id);
  }

  async function invoiceCreate(orderId: number) {
    await DocumentService.createInvoice(orderId);
    fetchAllInvoices();
  }

  return { invoices, fetchAllInvoices, invoiceCreate, fetchInvoicesByOrder };
});
