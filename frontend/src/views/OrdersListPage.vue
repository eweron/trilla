<template>
  <v-table fixed-header height="80vh" class="orders table">
    <thead>
      <tr class="table__head">
        <th class="text-left">Created</th>
        <th class="text-left">Number</th>
        <th class="text-left">Status</th>
        <th class="text-left">Seller</th>
        <th class="text-left">Customer</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(order, index) in orders" :key="index">
        <tr @click="showOrder(order)" class="table__row">
          <td>{{ utils.dateFormat(order.createdAt!) }}</td>
          <td>{{ order.number }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.Seller?.name }}</td>
          <td>{{ order.Customer?.name }}</td>
        </tr>
        <!-- <tr class="table__subrow table__subrow_hidden">
          <td colspan="5">
            <template
              v-for="(invoice, invoiceIdx) in order.Invoices"
              :key="invoiceIdx"
            >
              <v-icon>mdi-file-document-outline</v-icon>
              <strong>Invoice:</strong>
              {{ invoice.number }}
              <strong>Sum:</strong>
              {{ invoice.summ }}
            </template>
          </td>
        </tr> -->
      </template>
    </tbody>
  </v-table>

  <teleport to="#view-title">
    <div>Orders</div>
  </teleport>
  <teleport to="#view-actions">
    <v-btn
      @click="showOrderForm = true"
      color="green"
      prepend-icon="mdi-shopping-outline"
      variant="outlined"
    >
      New order
    </v-btn>
  </teleport>
  <order-form
    v-if="showOrderForm"
    :show="showOrderForm"
    :order-to-edit="orderToEdit"
    @close="closeOrderForm"
  />
</template>
<script setup lang="ts">
import OrderForm from "@/components/order/OrderForm.vue";
import { onMounted, ref, type Ref } from "vue";
import { useOrderStore } from "@/stores/orders";
import { storeToRefs } from "pinia";
import { utils } from "@/utils";
import type { Order } from "@/types";

const showOrderForm = ref(false);

const { orders } = storeToRefs(useOrderStore());
onMounted(async () => useOrderStore().fetchAll());

const toggleSubRow = (e: Event) => {
  const tr = e.currentTarget as HTMLElement;
  (tr.nextSibling as HTMLElement)?.classList.toggle("table__subrow_hidden");
};

const orderToEdit: Ref<Order | null> = ref(null);
const showOrder = (order: Order) => {
  orderToEdit.value = order;
  showOrderForm.value = true;
};
const closeOrderForm = () => {
  orderToEdit.value = null;
  showOrderForm.value = false;
}
</script>
<style scoped lang="scss">
.orders {
  &.table {
    .table__head {
    }
    .table__row {
      cursor: pointer;
    }

    .table__subrow {
      td {
        opacity: 1;
        transition: opacity 0.3s linear;
      }
      &.table__subrow_hidden {
        visibility: collapse;
        td {
          opacity: 0;
          transition: opacity 0.3s linear;
        }
      }
    }
  }
}
</style>
