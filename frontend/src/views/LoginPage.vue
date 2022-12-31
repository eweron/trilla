<template>
  <v-dialog v-model="dialog" persistent>
    <v-card class="mx-auto" width="400" prepend-icon="mdi-account">
      <template v-slot:title> Authorization </template>

      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.username"
                  label="User name"
                  required
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
            <v-btn color="success" class="mr-4" @click.prevent="login">
              Login
            </v-btn>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import type { User } from "@/types";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const dialog = true;

const authStore = useAuthStore();

const user: Ref<User> = ref({
  username: null,
  password: null,
});

const login = () => {
  if (user.value.username && user.value.password) {
    authStore.login(user.value).then(() => router.push("/tasks"));
  }
};
</script>
