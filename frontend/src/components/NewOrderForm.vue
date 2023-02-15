<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <v-card>
        <v-card-title>
          <span class="text-h5">New Order</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Order number *" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['new', 'done', 'canceled', 'paused']"
                  label="Status"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-select
                  :items="
                    counterparties?.map((c) => ({ title: c.name, value: c.id }))
                  "
                  label="Counterparties"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="$emit('close')">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="$emit('close')">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCounterpartyStore } from "@/stores/counterparties";
import { storeToRefs } from "pinia";

const props = defineProps<{
  show: boolean;
}>();

const dialog = computed(() => props.show);

const { counterparties } = storeToRefs(useCounterpartyStore());
const { fetchAll: fetchAllCounterparties } = useCounterpartyStore();
onMounted(() => fetchAllCounterparties());
</script>
