<template>
  <v-list lines="two">
    <v-list-item
      v-for="order in orders"
      :key="order.id!"
      :title="order.number!"
      :subtitle="`seller: ${order.Seller?.name} | customer: ${order.Customer?.name}`"
    >
      <template v-slot:prepend>
        <v-avatar color="grey-lighten-1">
          <v-icon color="white">mdi-shopping</v-icon>
        </v-avatar>
      </template>

      <template v-slot:append>
        <v-btn
          color="grey-lighten-1"
          icon="mdi-information"
          variant="text"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
  <teleport to="#view-title">
    <div>Orders</div>
  </teleport>
  <teleport to="#view-actions">
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
  />
</template>
<script setup lang="ts">
import NewOrderForm from "@/components/NewOrderForm.vue";
import { onMounted, ref, type Ref } from "vue";
import { useOrderStore } from "@/stores/orders";
import { storeToRefs } from "pinia";

const showNewOrderForm = ref(false);

const { orders } = storeToRefs(useOrderStore());
onMounted(async () => useOrderStore().fetchAll());
</script>
