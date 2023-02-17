"use strict";

import { _t } from "@/tools/Utils";

export default [
  {
    path: "/",
    name: "index",
    component: () => import("@/packages/dashboard/views/Index.vue"),
    meta: {
      title: _t("dashboard.router_title.index"),
    },
  },
];
