<template>
  <v-app-bar height="100" fixed absolute flat app color="background">
    <v-container class="px-xl-15">
      <v-row>
        <v-col cols="2">
          <h1 class="text-left white--text">
            <a
              href="https://axelina.com/"
              class="text-decoration-none white--text"
              >AXELINA</a
            >
          </h1>
        </v-col>
        <v-col cols="10" class="d-flex justify-end pa-0">
          <span
            v-for="(item, index) in routes"
            class="d-flex align-center pl-3"
            :key="index"
          >
            <span v-if="item.name === 'user_management'">
              <v-btn
                text
                v-show="!(user.role.name === 'teacher')"
                class="text-uppercase white--text text--white ml-1 menu-button font-weight-bold pa-2 justify-end"
                :style="
                  [
                    'user-management',
                    'interest-management',
                    'users-event-management',
                  ].includes($route.name)
                    ? 'color: #b9ffbc !important'
                    : ''
                "
                @click="menu2 = !menu2"
                v-click-outside="log2"
                dark
              >
                {{ $_t(`components.app.header.user_management`) }}
              </v-btn>
              <v-fade-transition>
                <v-card v-show="menu2" class="payment-nudge">
                  <v-list color="primary">
                    <v-list-item
                      dark
                      :to="{ name: 'user-management' }"
                      @click="menu2 = false"
                    >
                      <v-list-item-title>
                        {{
                          $_t(
                            "payment_management.components.base.users_management"
                          )
                        }}
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      dark
                      :to="{ name: 'interest-management' }"
                      @click="menu2 = false"
                    >
                      <v-list-item-title>
                        {{
                          $_t(
                            "payment_management.components.base.interest_management"
                          )
                        }}
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      dark
                      :to="{ name: 'users-event-management' }"
                      @click="menu2 = false"
                    >
                      <v-list-item-title>
                        {{ $_t("components.app.header.user_event") }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-fade-transition>
            </span>
            <v-btn
              v-else-if="
                item.name !== 'logout' || item.name !== 'payment_management'
              "
              text
              v-show="
                !(
                  user.role.name === 'teacher' &&
                  (item.name === 'user_management' ||
                    item.name === 'course_management' ||
                    item.name === 'home')
                )
              "
              :to="item.path"
              :class="item.class"
              class="text-uppercase white--text text--white ml-1 menu-button"
              active-class="primary text--green"
            >
              {{ $_t(`components.app.header.${item.name}`) }}
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </span>
          <span class="d-flex align-center pl-3">
            <v-btn
              text
              v-show="!(user.role.name === 'teacher')"
              class="text-uppercase white--text text--white ml-1 menu-button font-weight-bold pa-2 justify-end"
              :style="
                $route.name === 'order-management' ||
                $route.name === 'voucher-management'
                  ? 'color: #b9ffbc !important'
                  : ''
              "
              @click="menu = !menu"
              v-click-outside="log"
              dark
            >
              {{ $_t(`components.app.header.payment_management`) }}
            </v-btn>
            <v-fade-transition>
              <v-card v-show="menu" id="payment-nudge" class="payment-nudge">
                <v-list color="primary">
                  <v-list-item
                    dark
                    :to="{ name: 'order-management' }"
                    @click="menu = false"
                  >
                    <v-list-item-title>
                      {{ $_t("payment_management.components.base.to_order") }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    dark
                    :to="{ name: 'voucher-management' }"
                    @click="menu = false"
                  >
                    <v-list-item-title>
                      {{
                        $_t(
                          "payment_management.components.orders.filter.to_voucher"
                        )
                      }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-fade-transition>
          </span>
          <!--------------------- my user --------------------->
          <span class="d-flex align-center pl-3">
            <AccountMenu />
          </span>
          <!------------------- end icon user ---------------------------->
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { HEADER_LINKS } from "@/schema/navigation-drawer-link/NAV_LINKS";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
import { mapGetters } from "vuex";
import AccountMenu from "@/components/app/AccountMenu";
export default {
  name: "Header",
  components: { AccountMenu },
  data() {
    return {
      routes: HEADER_LINKS,
      Auth: new AuthenticationServices(),
      menu: false,
      menu2: false,
    };
  },
  computed: {
    ...mapGetters({
      refresh_token: "authentication/refresh_token",
      user: "authentication/user",
    }),
  },
  methods: {
    logout() {
      console.log(this.refresh_token, "this.refresh_token");
      this.Auth.logout({
        refresh_token: this.refresh_token,
      });
    },
    log() {
      this.menu = false;
    },
    log2() {
      this.menu2 = false;
    },
  },
};
</script>

<style scoped>
.menu-button:hover {
  background-color: #00573f !important;
  color: #b9ffbc !important;
}
.theme--dark.v-btn:hover::before {
  opacity: 0;
}
.theme--light.v-btn:hover::before {
  opacity: 0;
}
.v-menu__content {
  top: 75px !important;
  left: 1100px !important;
}
.text--green {
  color: #b9ffbc !important;
}
.text--green:before {
  background-color: transparent !important;
}
.payment-nudge {
  position: absolute;
  top: 70px;
  width: 190px;
}
</style>
