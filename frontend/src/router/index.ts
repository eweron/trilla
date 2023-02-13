import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import DashBoardPage from "@/views/DashBoardPage.vue";
import CounterpartiesListPage from "@/views/CounterpartiesListPage.vue";
import UsersListPage from "@/views/UsersListPage.vue";
import OrdersListPage from "@/views/OrdersListPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoardPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/users",
      name: "users",
      component: UsersListPage,
    },
    {
      path: "/counterparties",
      name: "counterparties",
      component: CounterpartiesListPage,
    },
    {
      path: "/orders",
      name: "orders",
      component: OrdersListPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
