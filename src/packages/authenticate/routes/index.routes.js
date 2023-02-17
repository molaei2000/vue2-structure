"use strict";

import { _t } from "@/tools/Utils";

export default [
  {
    path: "/auth",
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
          title: _t("authentication.router_title.login"),
          headTags: [],
        },
      },
      {
        path: "/auth/register",
        name: "auth.register",
        component: () => import("@/packages/authenticate/views/auth/Register"),
        meta: {
          title: _t("authentication.router_title.register"),
          headTags: [],
        },
      },
      {
        path: "/password/forgot",
        name: "password.forgot",
        component: () => import("@/packages/authenticate/views/auth/Forgot"),
        meta: {
          title: _t("authentication.router_title.forget_password"),
          headTags: [],
        },
      },
    ],
  },
];
