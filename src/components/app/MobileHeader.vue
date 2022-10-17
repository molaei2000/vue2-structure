<template>
  <v-container class="px-xl-15">
    <v-row class="mt-3 justify-center" max-height="670px" height="690px">
      <v-col cols="12" class="d-flex justify-space-between">
        <h1 class="text-left white--text">
          <a
            href="https://axelina.com/"
            class="text-decoration-none white--text"
            >AXELINA</a
          >
        </h1>
        <v-sheet color="primary" class="overflow-hidden d-flex">
          <!--      account menu -->
          <AccountMenu />
          <!--      end account menu-->
          <v-btn
            class="mx-2 text--black"
            color="primary"
            fab
            small
            @click.stop="drawer = !drawer"
            elevation="0"
          >
            <v-icon x-large color="#fff"> mdi-menu </v-icon>
          </v-btn>

          <v-navigation-drawer
            width="100%"
            right
            dir="rtl"
            v-model="drawer"
            class="primary col-12"
            temporary
            app
          >
            <v-list-item>
              <v-list-item-content>
                <v-icon
                  color="white darken-0"
                  class="justify-end"
                  @click.stop="drawer = !drawer"
                >
                  mdi-close
                </v-icon>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense>
              <v-list-item
                v-for="item in routes"
                :key="item.path.name"
                :to="item.path"
                class="text-center"
                active-class="white--text"
                color="#fff"
                v-show="
                  !(
                    user.role.name === 'teacher' &&
                    (item.name === 'user_management' ||
                      item.name === 'course_management' ||
                      item.name === 'home')
                  )
                "
                link
              >
                <v-list-item-content
                  class="text-uppercase"
                  v-if="item.name === 'home'"
                >
                  <v-list-item-title>{{
                    $_t(`components.app.header.dashboard`)
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content v-else>
                  <v-list-item-title>{{
                    $_t(`components.app.header.${item.name}`)
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-show="!(user.role.name === 'teacher')"
                active-class="white--text"
                class="text-center"
                :to="{ name: 'interest-management' }"
                color="#fff"
                link
              >
                <v-list-item-content class="text-uppercase">
                  <v-list-item-title>{{
                    $_t("components.app.header.interest_management")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-show="!(user.role.name === 'teacher')"
                active-class="white--text"
                class="text-center"
                :to="{ name: 'user-event-management' }"
                color="#fff"
                link
              >
                <v-list-item-content class="text-uppercase">
                  <v-list-item-title>{{
                    $_t("components.app.header.user_event")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-show="!(user.role.name === 'teacher')"
                active-class="white--text"
                color="#fff"
                class="text-center"
                :to="{ name: 'order-management' }"
                link
              >
                <v-list-item-content class="text-uppercase">
                  <v-list-item-title>{{
                    $_t("payment_management.components.base.to_order")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-show="!(user.role.name === 'teacher')"
                active-class="white--text"
                :to="{ name: 'voucher-management' }"
                color="#fff"
                class="text-center"
                link
              >
                <v-list-item-content class="text-uppercase">
                  <v-list-item-title>{{
                    $_t(
                      "payment_management.components.orders.filter.to_voucher"
                    )
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                link
                color="#fff"
                class="text-uppercase text-center"
                active-class="white--text"
                :to="{ name: 'bank_id.verify' }"
              >
                <v-list-item-title>
                  {{ $_t("authentication.components.auth.connect_bank_id") }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
import { HEADER_LINKS } from "@/schema/navigation-drawer-link/NAV_LINKS";
import AccountMenu from "@/components/app/AccountMenu";

export default {
  name: "MobileHeader",
  components: { AccountMenu },
  data: () => {
    return {
      drawer: false,
      AUTH: new AuthenticationServices(),
      routes: HEADER_LINKS,
    };
  },
  computed: {
    ...mapGetters({
      refresh_token: "authentication/refresh_token",
      user: "authentication/user",
    }),
  },
  methods: {
    async logout() {
      await this.AUTH.logout({ refresh_token: this.refresh_token });
      setTimeout(() => {
        window.location.reload();
      }, 200);
    },
  },
};
</script>

<style scoped>
.theme--light.v-list-item--active::before {
  opacity: 0.12;
  border-radius: 10px;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #fff !important;
}
</style>
