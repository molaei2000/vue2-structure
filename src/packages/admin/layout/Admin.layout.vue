<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      :mini-variant.sync="mini"
      permanent
    >
      <v-btn class="float-end" icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-list dense>
        <v-list-item
          :active-class="mini ? '' : 'item-active'"
          v-for="item in items"
          :to="item.to"
          :key="item.title"
          link
        >
          <v-list-item-icon :class="mini ? '' : 'ml-7'">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--     logout btn -->
      <v-btn block text class="rounded-0 logout" color="#A65959">
        <v-icon class="mr-3">mdi-logout-variant</v-icon>
        <span v-if="!mini">
          {{ $_t("admin.components.drawer.logout") }}
        </span>
      </v-btn>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <AdminHeader />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { ref } from "vue";
import { _t } from "@/tools/Utils";
import AdminHeader from "@/packages/admin/components/AdminHeader";
export default {
  name: "Admin.layout",
  components: { AdminHeader },
  setup() {
    const drawer = ref(false);
    const mini = ref(false);

    return { drawer, mini };
  },
  data: () => ({
    items: [
      {
        title: _t("admin.components.drawer.dashboard"),
        to: { name: "admin.dashboard" },
        icon: "mdi-view-dashboard",
      },
      {
        title: _t("admin.components.drawer.users"),
        to: { name: "admin.users" },
        icon: "mdi-account-outline",
      },
      {
        title: _t("admin.components.drawer.lessons"),
        to: { name: "admin.lessons" },

        icon: "mdi-book-open-page-variant-outline",
      },
      {
        title: _t("admin.components.drawer.specifications"),
        to: { name: "admin.specifications" },
        icon: "mdi-book-outline",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      user: "authentication/user",
      itemsLength: "pagination/get_items_length",
      all: "admin/get_all",
    }),
    headerLinks() {
      return [
        {
          icon: "mdi-view-dashboard",
          title: "dashboard",
          to: { name: "admin.main" },
          show: !!this.user,
        },
        {
          icon: "mdi-account",
          title: "users",
          to: { name: "admin.users" },
          show: !!this.user,
        },
      ];
    },
  },
};
</script>

<style scoped>
.item-active {
  color: #fff;
  opacity: 1;
}
.item-active:hover {
  color: #4340da;
  opacity: 1;
}
.item-active:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 90%;
  background: #4340da;
  right: 0;
  left: 10%;
  bottom: 0;
  opacity: 1;
  z-index: -10;
  border-radius: 4px 0px 0px 4px;
}
.logout {
  position: absolute;
  bottom: 100px;
}
</style>
