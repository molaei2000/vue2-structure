"use strict";
import { _t } from "@/tools/Utils";

export const dashboardRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    // component: () =>
    // import(
    //   /* webpackChunkName: "dashboard" */ "@/views/dashboard/dashboard.vue"
    // ),
    component: () => import(/* webpackChunkName: "dashboard" */"@/packages/dashboard/views/Index.vue"),

    meta: {
      title: _t("router.routes.dashboard_routes.dashboard"),
    },

    children: [],
  },
];
