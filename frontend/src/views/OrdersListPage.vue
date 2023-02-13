<template>
  <v-list lines="two">
    <v-list-item
      v-for="order in orders"
      :key="order.id!"
      :title="order.number"
      :subtitle="order.number"
    >
      <template v-slot:prepend>
        <v-avatar color="grey-lighten-1">
          <v-icon color="white">mdi-briefcase-variant</v-icon>
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
  <!-- <teleport to="#view-actions">
      <v-btn
        @click="showNewUserForm = true"
        color="green"
        prepend-icon="mdi-account-plus"
        variant="outlined"
      >
        New user
      </v-btn>
    </teleport> -->
  <!-- <new-user-form
      :show="showNewUserForm"
      @close="showNewUserForm = false"
      @created="updateList"
    /> -->
</template>
<script setup lang="ts">
// import NewUserForm from "@/components/NewUserForm.vue";
import OrdersService from "@/services/orders";
import type { Order } from "@/types";
import { onMounted, ref, type Ref } from "vue";

// const showNewUserForm = ref(false);
const orders: Ref<Order[]> = ref([]);
onMounted(async () => {
  orders.value = await OrdersService.getAll();
});

const updateList = async () => (orders.value = await OrdersService.getAll());
</script>
