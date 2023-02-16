import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import OrderService from "@/services/orders";
import type { Order } from "@/types";

export const useOrderStore = defineStore("orders", () => {
  const orders: Ref<Array<Order> | null> = ref([]);

  async function fetchAll() {
    const data = await OrderService.getAll();
    orders.value = data;
  }

  async function orderCreate(order: Order) {
    await OrderService.create(order);
    fetchAll();
  }

  return { orders, fetchAll, orderCreate };
});
