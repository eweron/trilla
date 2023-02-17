<template>
  <v-list lines="two">
    <v-list-item
      v-for="counterparty in counterparties"
      :key="counterparty.id!"
      :title="counterparty.name!"
      :subtitle="counterparty.description!"
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
    <div>Counterparties</div>
  </teleport>
  <teleport to="#view-actions">
    <v-btn
      @click="showNewCounterpartyForm = true"
      color="green"
      prepend-icon="mdi-briefcase-variant-outline"
      variant="outlined"
    >
      New counterparty
    </v-btn>
  </teleport>
  <new-counterparty-form
    :show="showNewCounterpartyForm"
    @close="showNewCounterpartyForm = false"
  />
</template>
<script setup lang="ts">
import NewCounterpartyForm from "@/components/NewCounterpartyForm.vue";
import { onMounted, ref, type Ref } from "vue";
import { useCounterpartyStore } from "@/stores/counterparties";
import { storeToRefs } from "pinia";

const showNewCounterpartyForm = ref(false);

const { counterparties } = storeToRefs(useCounterpartyStore());
onMounted(async () => useCounterpartyStore().fetchAll());
</script>
