<template>
  <invoice-list />

  <teleport to="#view-title">
    <div>Invoices</div>
  </teleport>
  <!-- <teleport to="#view-actions">
    <v-btn
      @click="showNewOrderForm = true"
      color="green"
      prepend-icon="mdi-shopping-outline"
      variant="outlined"
    >
      New order
    </v-btn>
  </teleport>
  <new-order-form
    v-if="showNewOrderForm"
    :show="showNewOrderForm"
    @close="showNewOrderForm = false"
  /> -->
</template>
<script setup lang="ts">
import InvoiceList from "./InvoiceList.vue";
</script>
