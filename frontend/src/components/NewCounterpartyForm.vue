<template>
  <right-side-bar :show="show" @close="closeSideBar" title="New counterparty">
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="counterparty.name"
              label="Name *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="counterparty.description"
              label="Description"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="counterparty.taxId"
              label="TaxID *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="counterparty.email"
              label="Email"
              type="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="counterparty.phone"
              label="Phone"
              type="Phone"
            ></v-text-field>
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
import { ref } from "vue";
import { useCounterpartyStore } from "@/stores/counterparties";
import type { Counterparty } from "@/types";

const props = defineProps<{
  show: boolean;
}>();

const counterparty = ref<Counterparty>({
  name: null,
  description: null,
  taxId: null,
  email: null,
  phone: null,
  address: null,
});

const emits = defineEmits(["close", "created"]);
const closeSideBar = () => {
  // counterparty.value = {
  //   name: null,
  //   description: null,
  //   taxId: null,
  //   email: null,
  //   phone: null,
  //   address: null,
  // };
  emits("close");
};

const { counterpartyCreate } = useCounterpartyStore();
const create = () => {
  counterpartyCreate(counterparty.value);
  emits("close");
};
</script>
