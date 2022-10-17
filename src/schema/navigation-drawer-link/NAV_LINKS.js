import { _t } from "@/tools/Utils";

export const NAV_LINKS = [
  {
    title: _t("layouts.nav_items.movies"),
    icon: "mdi-movie-roll",
    to: {
      name: "movies",
    },
  },
  {
    title: _t("layouts.nav_items.users"),
    icon: "mdi-account-group-outline",
    to: {
      name: "users",
    },
  },
];

export const HEADER_LINKS = [
  {
    name: "home",
    path: {
      name: "dashboard",
    },
    icon: "mdi-home",
    class: "font-weight-bold pa-2 justify-center",
  }
];
