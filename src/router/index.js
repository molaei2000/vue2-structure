import Vue from "vue";
import VueRouter from "vue-router";
import { _t } from "@/tools/Utils";

import { pageNotFoundRoutes } from "@/router/routes/pageNotFount.routes";
import { panelPageNotFoundRoutes } from "@/router/routes/pageNotFount.routes";

Vue.use(VueRouter);
const baseRoutes = [];
const requiredAuthRoutes = [];
const requiredAdminRoutes = [];
// Import all of the resource routes files.
function loadRoutes() {
  const context = require.context("@/packages", true, /routes.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}
const resourceRoutes = loadRoutes();
resourceRoutes.forEach((route) => {
  for (let i = 0; i < route.length; i++) {
    if (route[i].meta.requiresGuest) baseRoutes.push(route[i]);
    else if (route[i].meta.requiresAuth) requiredAuthRoutes.push(route[i]);
    else if (route[i].meta.requiresAdmin) requiredAdminRoutes.push(route[i]);
    else baseRoutes.push(route[i]);
  }
});

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/App.vue"),
    redirect: { name: "admin.dashboard" },
    meta: {
      title: _t("router.index.panel_title"),
      requiresAdmin: true,
    },
    children: [...requiredAdminRoutes, ...panelPageNotFoundRoutes],
  },
  {
    path: "/panel",
    name: "panel",
    component: () => import("@/layouts/App.vue"),
    redirect: { name: "dashboard.main" },
    meta: {
      title: _t("router.index.panel_title"),
      requiresAuth: true,
    },
    children: [...requiredAuthRoutes, ...panelPageNotFoundRoutes],
  },
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [...baseRoutes, ...pageNotFoundRoutes],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
