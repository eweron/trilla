<template>
  <v-list lines="two">
    <v-list-item
      v-for="user in users"
      :key="user.id!"
      :title="user.username"
      :subtitle="user.email!"
    >
      <template v-slot:prepend>
        <v-avatar color="grey-lighten-1">
          <v-icon color="white">mdi-account</v-icon>
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
    <div>Users</div>
  </teleport>
  <teleport to="#view-actions">
    <v-btn
      @click="showNewUserForm = true"
      color="green"
      prepend-icon="mdi-account-plus"
      variant="outlined"
    >
      New user
    </v-btn>
  </teleport>
  <new-user-form
    :show="showNewUserForm"
    @close="showNewUserForm = false"
    @created="updateList"
  />
</template>
<script setup lang="ts">
import NewUserForm from "@/components/NewUserForm.vue";
import UserService from "@/services/user";
import type { User } from "@/types";
import { onMounted, ref, type Ref } from "vue";

const showNewUserForm = ref(false);
const users: Ref<User[]> = ref([]);
onMounted(async () => {
  users.value = await UserService.getAll();
});

const updateList = async () => (users.value = await UserService.getAll());
</script>
