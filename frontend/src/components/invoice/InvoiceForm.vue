<template>
  <right-side-bar :show="show" @close="closeSideBar" title="Invoice">
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="invoice.number"
              label="Number"
              required
              type="text"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="invoice.summ"
              label="Summ"
              required
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              density="comfortable"
              v-model="invoice.currencyId"
              :items="currencies?.map((c) => ({ title: c.name, value: c.id }))"
              label="Currency"
            ></v-select>
          </v-col>
        </v-row>
        <v-btn color="success" class="mr-4" @click.prevent="create">
          Create
        </v-btn>
      </v-container>
    </v-form>
  </right-side-bar>
</template>
<script setup lang="ts">
import RightSideBar from "@/components/RightSideBar.vue";
import type { Invoice } from "@/types";
import { onMounted, ref } from "vue";
import DocumentService from "@/services/documents";
import { useDocumentsStore } from "@/stores/documents";
import { storeToRefs } from "pinia";

const props = defineProps<{
  show: boolean;
  orderId?: number | null;
  purchaseId?: number | null;
}>();

const invoice = ref<Invoice>({
  number: null,
  orderId: props.orderId,
  purchaseId: null,
  currencyId: null,
  summ: null,
});

const { currencies } = storeToRefs(useDocumentsStore());
onMounted(() => useDocumentsStore().fetchAllCurrencies());

const emit = defineEmits(["close", "created"]);
const closeSideBar = () => {
  emit("close");
};

const create = async () => {
  await useDocumentsStore().invoiceCreate(invoice.value);
  emit("created");
  closeSideBar();
};
</script>
