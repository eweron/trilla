import { defineStore } from "pinia";
import AuthService from "@/services/auth";
import type { User } from "@/types";

export const useAuthStore = defineStore("auth", () => {
  function login(user: User) {
    return AuthService.login(user).then(
      (user) => Promise.resolve(user),
      (error) => Promise.reject(error)
    );
  }

  return { login };
});
