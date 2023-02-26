<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <v-card>
        <v-card-title>
          <span class="text-h5">Order</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="3">
                <v-text-field
                  density="comfortable"
                  v-model="order.number"
                  label="Order number *"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  density="comfortable"
                  v-model="order.status"
                  :items="['new', 'done', 'canceled', 'paused']"
                  label="Status"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-select
                  density="comfortable"
                  :loading="!counterparties?.length"
                  :items="
                    counterparties?.map((c) => ({ title: c.name, value: c.id }))
                  "
                  label="Seller *"
                  v-model="order.seller"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  density="comfortable"
                  :loading="!counterparties?.length"
                  :items="
                    counterparties?.map((c) => ({ title: c.name, value: c.id }))
                  "
                  v-model="order.customer"
                  label="Customer *"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                  density="comfortable"
                  v-model="order.description"
                  label="Description"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
          <v-divider></v-divider>
          <v-tabs v-model="tab">
            <v-tab value="one">Invoices</v-tab>
            <v-tab value="two">Item Two</v-tab>
            <v-tab value="three">Item Three</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="one">
              <invoice-list v-if="order.id" :order-id="order.id" />
            </v-window-item>

            <v-window-item value="two"> Two </v-window-item>

            <v-window-item value="three"> Three </v-window-item>
          </v-window>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!order.id"
            color="green-darken-1"
            variant="text"
            @click="create"
          >
            Create
          </v-btn>
          <v-btn v-else color="green-darken-1" variant="text" @click="update"
            >Update</v-btn
          >
          <v-btn color="red-darken-1" variant="text" @click="$emit('close')">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref, type Ref } from "vue";
import { useCounterpartyStore } from "@/stores/counterparties";
import { useOrderStore } from "@/stores/orders";
import { storeToRefs } from "pinia";
import type { Order, Counterparty } from "@/types";
import InvoiceList from "@/views/invoice/InvoiceList.vue";

const props = defineProps<{
  show: boolean;
  orderToEdit?: Order;
}>();

const emits = defineEmits(["close"]);

const dialog = computed(() => props.show);

const order: Ref<Order> = ref({
  number: null,
  seller: null,
  customer: null,
  status: null,
  description: null,
});
onMounted(() => {
  if (props.orderToEdit?.id) {
    order.value = { ...props.orderToEdit! };
  }
});

const { counterparties } = storeToRefs(useCounterpartyStore());
const { fetchAll: fetchAllCounterparties } = useCounterpartyStore();
onMounted(() => fetchAllCounterparties());

const { orderCreate } = useOrderStore();
const create = () => {
  orderCreate(order.value);
  emits("close");
};
const update = () => {};
const tab = ref(null);
</script>
