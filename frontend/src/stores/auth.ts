import { defineStore } from "pinia";
import AuthService from "@/services/auth";
import type { User } from "@/types";
import { ref, type Ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user: Ref<User | null> = ref(
    JSON.parse(localStorage.getItem("user") as string)
  );
  const loggedIn: Ref<boolean> = ref(false);
  loggedIn.value = !!user.value;

  function login(usr: Ref<User>) {
    return AuthService.login(usr.value).then(
      (data) => {
        loggedIn.value = true;
        user.value = data;
        return Promise.resolve(data);
      },
      (error) => {
        loggedIn.value = false;
        user.value = null;
        return Promise.reject(error);
      }
    );
  }

  function logout() {
    AuthService.logout();
    user.value = null;
  }

  return { user, login, logout };
});
