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
    children: [
      {
        path: "/system/user",
        name: "user",
        component: () => import("@/views/home/system/user/user.vue"),
      },
      {
        path: "/system/dashboard",
        name: "dashboard",
        component: () => import("@/views/home/system/user/dashboard.vue"),
      },
      {
        path: "/user/userinfo",
        name: "userinfo",
        component: () => import("@/views/home/system/userinfo/userinfo.vue"),
      },
      {
        path: "/peg/shop",
        name: "pegshop",
        component: () => import("@/views/home/system/peg/pegshop.vue"),
      },
      {
        path: "/peg/info",
        name: "peginfo",
        component: () => import("@/views/home/system/peg/peginfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localUtil.setLocal("token");
    if (!token) {
      return "/login";
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
