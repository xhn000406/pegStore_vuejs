import { localUtil } from "@/utils/localUtil";
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localUtil.setLocal("token");
    if (!token) {
      return "login";
    }
  }
});

// router.beforeEach((to) => {
//   if (to.path !== "/login") {
//     const token = localCache.getCache("token");
//     if (!token) {
//       return "/login";
//     }

//     if (to.path === "/main") {
//       return firstMenu.url;
//     }
//   }
// });

export default router;
