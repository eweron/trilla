<template>
  <right-side-bar :show="show" @close="closeSideBar" title="New user">
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.username"
              label="User Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.email"
              label="Email"
              required
              type="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.password"
              label="Password"
              required
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="success" class="mr-4" @click.prevent="create">
          Создать
        </v-btn>
      </v-container>
    </v-form>
  </right-side-bar>
</template>
<script setup lang="ts">
import RightSideBar from "@/components/RightSideBar.vue";
import type { User } from "@/types";
import { ref } from "vue";
import AuthService from "@/services/auth";

const props = defineProps<{
  show: boolean;
}>();

const user = ref<User>({
  username: "",
  email: "",
  password: "",
});

const emit = defineEmits(["close", "created"]);
const closeSideBar = () => {
  user.value = {
    username: "",
    email: "",
    password: "",
  };
  emit("close");
};

const create = () => {
  if (user.value.username && user.value.password) {
    AuthService.register(user.value).then(() => {
      emit("created");
      closeSideBar();
    });
  }
};
</script>
