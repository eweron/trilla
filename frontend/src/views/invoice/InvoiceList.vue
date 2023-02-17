<template>
  <v-table fixed-header height="80vh">
    <thead>
      <tr>
        <th class="text-left">Created</th>
        <th class="text-left">Number</th>
        <th class="text-left">Seller -> Customer</th>
        <th class="text-left">Summ</th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(invoice, index) in invoices" :key="index">
        <td>{{ utils.dateFormat(invoice.createdAt!) }}</td>
        <td>{{ invoice.number }}</td>
        <td>
          {{ invoice.Order?.Seller?.name }}->{{ invoice.Order?.Customer?.name }}
        </td>
        <td>{{ invoice.summ }}</td>
        <td></td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { useDocumentsStore } from "@/stores/documents";
import { storeToRefs } from "pinia";
import { utils } from "@/utils";

const props = defineProps<{
  orderId?: number;
}>();

const { invoices } = storeToRefs(useDocumentsStore());
onMounted(() => {
  props.orderId
    ? useDocumentsStore().fetchInvoicesByOrder(props.orderId)
    : useDocumentsStore().fetchAllInvoices();
});
</script>
