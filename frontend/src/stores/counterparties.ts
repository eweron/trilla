import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import CounterpartyService from "@/services/counterparties";
import type { Counterparty } from "@/types";

export const useCounterpartyStore = defineStore("counterparties", () => {
  const counterparties: Ref<Array<Counterparty> | null> = ref([]);

  async function fetchAll() {
    const data = await CounterpartyService.getAll();
    counterparties.value = data;
  }

  async function counterpartyCreate(counterparty: Counterparty) {
    await CounterpartyService.create(counterparty);
    fetchAll();
  }

  return { counterparties, fetchAll, counterpartyCreate };
});
