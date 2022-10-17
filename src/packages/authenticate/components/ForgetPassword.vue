<template>
  <div class="d-flex justify-center">
    <v-card
      v-if="!is_email_sent"
      style="margin-top: 100px"
      width="370"
      height="400px"
      class="mx-4 card-shadow"
    >
      <v-card-title class="d-block justify-center pt-10 px-12">
        <p
          class="text-center primary--text text-display-1 font-weight-bold mb-0"
        >
          {{ $_t("authentication.components.forget_password.reset_password") }}
        </p>
        <br />
        <p class="text-center grey--text lighten-3 text-subtitle-2 text-break">
          {{ $_t("authentication.components.forget_password.info") }}
        </p>
      </v-card-title>
      <Back />

      <v-card-text style="position: relative" class="px-12">
        <v-row>
          <v-col cols="12">
            <GreenSoft>
              <template v-slot:body>
                <FormGenerator :schema="schema" :validator="$v"
              /></template>
              <template v-slot:action>
                <v-row class="d-flex justify-center resentLink mt-9"
                  ><v-col cols="12" class="mt-2 pl-0 pr-0">
                    <v-btn
                      @click="submit"
                      class="primary white--text"
                      width="100%"
                    >
                      {{
                        $_t("authentication.components.forget_password.reset")
                      }}
                    </v-btn></v-col
                  ></v-row
                >
              </template>
            </GreenSoft></v-col
          >
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      v-else
      style="margin-top: 120px"
      height="400"
      width="370"
      class="d-flex align-center justify-center"
    >
      <v-card-title class="d-flex justify-center align-center px-14">
        <p
          class="text-center primary--text text-display-1 font-weight-bold mb-0 text-break"
        >
          {{ $_t("authentication.components.forget_password.success") }}
        </p>
        <v-btn
          @click="$router.replace({ name: 'auth.login' })"
          class="primary white--text mt-10"
          width="100%"
        >
          {{ $_t("authentication.components.forget_password.toLogin") }}
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { RESET_PASSWORD } from "@/packages/authenticate/schema/forms/RESET_PASSWORD";
import FormGenerator from "@/components/app/form/AuthFormGenerator";
import GreenSoft from "@/components/app/form/GreenSoftForm";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
import Back from "@/components/app/Back";
export default {
  name: "GetUsername",
  components: { Back, GreenSoft, FormGenerator },
  data() {
    return {
      auth: new AuthenticationServices(),
      is_email_sent: false,
      schema: RESET_PASSWORD.schema,
      form: RESET_PASSWORD.model,
      isShowDelete: false,
    };
  },
  validations: { ...RESET_PASSWORD.validations },
  computed: {
    ...mapGetters({
      is_loading: "loading/is_loading",
    }),
  },
  methods: {
    ...mapActions({
      startLoading: "loading/start",
      finishLoading: "loading/finish",
    }),
    isFormValidate() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },

    async submit() {
      if (!this.isFormValidate()) return;
      let response = await this.auth.resetPass(this.form);
      if (response) {
        this.is_email_sent = true;
      } else {
        this.is_email_sent = false;
      }
    },
    async openModal() {
      this.isShowDelete = true;
    },
    closeModal() {
      this.isShowDelete = false;
    },
  },
};
</script>

<style scoped lang="scss">
.resentLink {
  right: 50% !important;
  left: 50% !important;

  bottom: 15px;
}
.v-form {
  div {
    width: 100%;
    margin: 0px;
  }
}
</style>
