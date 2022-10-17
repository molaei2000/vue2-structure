<template>
  <div class="text-center">
    <!--  Gust  -->
    <v-btn v-if="!user" fab elevation="0" small :to="{ name: 'auth.login' }">
      <v-icon> mdi-account-outline </v-icon>
    </v-btn>

    <!--  User  -->
    <v-menu v-if="user" v-model="menu" :nudge-width="200" offset-y left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2 text--black"
          color="#fff"
          fab
          small
          v-bind="attrs"
          v-on="on"
          elevation="0"
        >
          <v-icon x-large color="primary"> mdi-account-circle </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar class="pa-0">
              <v-icon> mdi-account-circle </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{ user.first_name }} {{ user.last_name }}</v-list-item-title
              >
              <v-list-item-subtitle
                >{{ user.email }} | {{ user.role.name }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action> </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
            v-if="user.role.name !== 'teacher'"
            :to="{ name: 'dashboard' }"
          >
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{ $_t("components.app.header.dashboard") }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'bank_id.verify' }">
            <v-list-item-action>
              <v-icon v-if="!user.bankid_signature"
                >mdi-link-variant-off</v-icon
              >
              <v-icon v-else>mdi-link-variant</v-icon>
            </v-list-item-action>
            <v-list-item-title v-if="!user.bankid_signature">
              {{ $_t("authentication.components.auth.connect_bank_id") }}
            </v-list-item-title>
            <v-list-item-title v-else>
              {{ $_t("authentication.components.auth.linK_to_bank_id") }}
            </v-list-item-title>
          </v-list-item>
          <SwitchLangDialog>
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-web</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                  {{ $_t("components.app.header.language.change_language") }}
                </v-list-item-title>
              </v-list-item>
            </template>
          </SwitchLangDialog>

          <v-list-item @click="logout">
            <v-list-item-action>
              <v-icon>mdi-location-exit</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{ $_t(`components.app.header.logout`) }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
import SwitchLangDialog from "@/components/app/SwitchLangDialog";

export default {
  components: { SwitchLangDialog },
  data: () => ({
    AUTH: new AuthenticationServices(),
    fav: true,
    menu: false,
    message: false,
    select_lang_dialog: false,
    hints: true,
  }),
  computed: {
    ...mapGetters({
      refresh_token: "authentication/refresh_token",
      user: "authentication/user",
    }),
  },
  mounted() {},
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
