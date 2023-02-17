"use strict";
import { _t } from "@/tools/Utils";

export default [
  {
    path: "/admin/panel",
    component: () => import("@/packages/admin/layout/Admin.layout.vue"),
    redirect: { name: "admin.dashboard" },
    meta: {
      title: _t("admin.route_title.dashboard"),
      requiresAdmin: true,
    },
    children: [
      {
        path: "/admin/panel/dashboard/",
        name: "admin.dashboard",
        component: () => import("@/packages/admin/views/dashboard.vue"),
        meta: {
          title: _t("admin.route_title.dashboard"),
          requiresAdmin: true,
        },
      },
      {
        path: "/admin/panel/users",
        name: "admin.users",
        component: () => import("@/packages/admin/views/users.vue"),
        meta: {
          title: _t("admin.route_title.users"),
          requiresAdmin: true,
        },
      },
    ],
  },
];
