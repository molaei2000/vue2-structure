import { _t } from "@/tools/Utils";

export const USER_TABLE_HEADER_SCHEMA = [
  {
    text: _t("admin.components.user_table.header.name"),
    align: "start",
    sortable: false,
    value: "fullName",
    class: "text--disabled text-subtitle-1",
    cellClass: "text-capitalize",
  },
  {
    text: _t("admin.components.user_table.header.nickname"),
    sortable: false,
    value: "nickName",
    class: "text--disabled text-subtitle-1",
    cellClass: "text-capitalize text--secondary",
  },
  {
    text: _t("admin.components.user_table.header.username"),
    sortable: false,
    value: "userName",
    class: "text--disabled text-subtitle-1",
    cellClass: "text-capitalize text--secondary",
  },
  {
    text: _t("admin.components.user_table.header.role"),
    sortable: false,
    value: "permissions",
    class: "text--disabled text-subtitle-1",
    cellClass: "text-capitalize",
  },
  {
    text: "",
    sortable: false,
    value: "actions",
    class: "text--disabled text-subtitle-1",
    width: "200px",
  },
];
