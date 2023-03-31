import createListView from "@/views/CreateListView";
import ItemView from "@/views/ItemView.vue";
import UserView from "@/views/UserView.vue";
import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import { useNewsStore } from "@/store/news";

export const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",
    component: createListView("NewsView"),
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const store = useNewsStore();
      store.onProgress();
      store
        .FETCH_LIST(to.name as string)
        .then(() => next())
        .catch(() => new Error("faild to fetch news items"));
    },
  },
  {
    path: "/ask",
    name: "ask",
    component: createListView("AskView"),
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const store = useNewsStore();
      store.onProgress();
      store
        .FETCH_LIST(to.name as string)
        .then(() => next())
        .catch(() => new Error("faild to fetch ask items"));
    },
  },
  {
    path: "/jobs",
    name: "jobs",
    component: createListView("JobsView"),
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const store = useNewsStore();
      store.onProgress();
      store
        .FETCH_LIST(to.name as string)
        .then(() => next())
        .catch(() => new Error("faild to fetch jobs items"));
    },
  },
  {
    path: "/item/:id",
    name: "item",
    component: ItemView,
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const store = useNewsStore();
      const itemId = to.params.id;
      store.onProgress();
      store
        .FETCH_ITEM(itemId as string)
        .then(() => next())
        .catch(() => new Error("faild to fetch items details"));
    },
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView,
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const store = useNewsStore();
      const userId = to.params.id;
      store.onProgress();
      store
        .FETCH_USER(userId as string)
        .then(() => next())
        .catch(() => new Error("faild to fetch user profile"));
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
