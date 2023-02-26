<script setup lang="ts">
import { ref, type Ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const drawer = ref(true);
const rail = ref(true);

const { user, logout } = useAuthStore();
const router = useRouter();
const out = () => {
  logout();
  router.push("/login");
};
</script>

<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :rail="rail"
      permanent
      class="bg-indigo"
      theme="dark"
      @click="rail = false"
    >
      <v-list-item
        prepend-icon="mdi-account-circle-outline"
        :title="user?.username"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          @click="$router.push('/')"
          prepend-icon="mdi-view-dashboard-outline"
          title="Dashboard"
        ></v-list-item>
        <v-list-item
          @click="$router.push('users')"
          prepend-icon="mdi-account-multiple"
          title="Users"
        ></v-list-item>
        <v-list-item
          @click="$router.push('counterparties')"
          prepend-icon="mdi-briefcase-variant"
          title="Counterparties"
        ></v-list-item>
        <v-list-item
          @click="$router.push('orders')"
          prepend-icon="mdi-shopping"
          title="Orders"
        ></v-list-item>
        <v-list-item
          @click="$router.push('purchases')"
          prepend-icon="mdi-package-variant-closed"
          title="Purchases"
        ></v-list-item>
        <v-list-item
          @click="$router.push('invoices')"
          prepend-icon="mdi-file-document-multiple"
          title="Invoices"
        ></v-list-item>
        <v-list-item
          v-if="user?.username"
          @click="out"
          prepend-icon="mdi-logout-variant"
          title="Logout"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :elevation="2" :order="1">
      <v-app-bar-title id="view-title"></v-app-bar-title>
      <v-spacer></v-spacer>
      <div id="view-actions"></div>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped lang="scss">
.v-container {
  max-width: none;
}
</style>
