<template>
  <v-app-bar height="100" fixed absolute flat app color="background">
    <v-container class="px-xl-15">
      <v-row>
        <v-col>
          header
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { HEADER_LINKS } from "@/schema/navigation-drawer-link/NAV_LINKS";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      routes: HEADER_LINKS,
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
