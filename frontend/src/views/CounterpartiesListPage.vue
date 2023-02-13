<template>
  <v-list lines="two">
    <v-list-item
      v-for="counterparty in counterparties"
      :key="counterparty.id!"
      :title="counterparty.name"
      :subtitle="counterparty.name"
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
import CounterpartyService from "@/services/counterparties";
import type { Counterparty } from "@/types";
import { onMounted, ref, type Ref } from "vue";

// const showNewUserForm = ref(false);
const counterparties: Ref<Counterparty[]> = ref([]);
onMounted(async () => {
  counterparties.value = await CounterpartyService.getAll();
});

const updateList = async () =>
  (counterparties.value = await CounterpartyService.getAll());
</script>
