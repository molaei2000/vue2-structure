"use strict";
import PageNotfound from "@/views/404/Page404";
import { _t } from "@/tools/Utils";
export const pageNotFoundRoutes = [
  // error page
  {
    path: "/404",
    name: "404",
    component: PageNotfound,
    meta: {
      title: _t("router.routes.page_not_found_routes.not_found"),
    },
  },
  { path: "*", redirect: "/404" },
];

export const panelPageNotFoundRoutes = [
  {
    path: "/panel/*",
    component: PageNotfound,
    meta: {
      title: _t("router.routes.page_not_found_routes.not_found"),
    },
  },
];
