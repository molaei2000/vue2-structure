"use strict";

import { _t } from "@/tools/Utils";

export default [
  {
    path: "/",
    name: "auth",
    component: () => import("@/packages/authenticate/layout/Auth.layout"),
    meta: {
      requiresGuest: true,
      title: _t("authentication.router_title.login"),
      headTags: [],
    },
    redirect: { name: "auth.login" },
    children: [
      {
        path: "/auth/login",
        name: "auth.login",
        component: () => import("@/packages/authenticate/views/auth/Login"),
        meta: {
          title: _t("authentication.route_titles.login"),
          headTags: [],
        },
      },
      {
        path: "/password/forgot",
        name: "password.forgot",
        component: () => import("@/packages/authenticate/views/auth/Forgot"),
        meta: {
          title: _t("authentication.route_titles.forgot_password"),
          headTags: [],
        },
      },
      {
        path: "/reset-password",
        name: "reset-password:token?",
        component: () =>
          import("@/packages/authenticate/views/auth/ResetPassword"),
        meta: {
          title: _t("authentication.route_titles.forgot_password"),
        },
      },
      {
        path: "/password/reset",
        name: "password.reset",
        component: () => import("@/packages/authenticate/views/auth/Reset"),
        meta: {
          title: _t("authentication.route_titles.reset_password"),
          headTags: [],
        },
      },
    ],
  },
];
