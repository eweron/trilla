<template>
  <v-table fixed-header height="80vh">
    <thead>
      <tr>
        <th class="text-left">Created</th>
        <th class="text-left">Number</th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(purchase, index) in purchases" :key="index">
        <td>{{ utils.dateFormat(purchase.createdAt!) }}</td>
        <td>{{ purchase.number }}</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { usePurchaseStore } from "@/stores/purchases";
import { storeToRefs } from "pinia";
import { utils } from "@/utils";

const props = defineProps<{
  orderId?: number;
}>();

const { purchases } = storeToRefs(usePurchaseStore());
onMounted(() => {
  usePurchaseStore().fetchAll();
});
</script>
