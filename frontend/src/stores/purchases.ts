import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import PurchaseService from "@/services/purchases";
import type { Purchase } from "@/types";

export const usePurchaseStore = defineStore("purchases", () => {
  const purchases: Ref<Array<Purchase> | null> = ref([]);

  async function fetchAll() {
    purchases.value = await PurchaseService.getAll();
  }

  async function purchaseCreate(purchase: Purchase) {
    await PurchaseService.create(purchase);
    fetchAll();
  }

  return { purchases, fetchAll, purchaseCreate };
});
