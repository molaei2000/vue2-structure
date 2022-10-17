<template>
  <v-row class="d-flex justify-center align-center">
    <v-card class="rounded mt-15 card-shadow" width="370" height="400px">
      <v-card-title class="d-block justify-center text-center pt-10">
        <span
          class="text-center primary--text text-display-1 font-weight-bold mb-0"
        >
          {{ $_t("authentication.components.forget_password.change_password") }}
        </span>
        <br />
      </v-card-title>

      <v-card-text
        style="position: relative"
        class="d-flex justify-center px-4"
      >
        <v-row>
          <v-col cols="12">
            <GreenSoft>
              <template v-slot:body>
                <form @keydown.enter="changePassword">
                  <FormGenerator :schema="schema" :validator="$v" />
                </form>
              </template>
              <template v-slot:action>
                <v-row class="d-flex justify-center resentLink"
                  ><v-col cols="12" class="mt-3">
                    <v-btn
                      @click="changePassword"
                      class="primary white--text"
                      width="100%"
                      >{{
                        $_t(
                          "authentication.components.forget_password.change_password_btn"
                        )
                      }}</v-btn
                    ></v-col
                  ></v-row
                >
              </template>
            </GreenSoft></v-col
          >
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
import { CHANGE_PASSWORD } from "@/packages/authenticate/schema/forms/CHANGE_PASSWORD";
import FormGenerator from "@/components/app/form/AuthFormGenerator";
import GreenSoft from "@/components/app/form/GreenSoftForm";
import message from "@/tools/Message";

export default {
  name: "VerifyResetPassword",
  data: () => {
    return {
      auth: new AuthenticationServices(),
      schema: CHANGE_PASSWORD.schema,
      form: CHANGE_PASSWORD.model,
    };
  },
  validations: {
    ...CHANGE_PASSWORD.validations,
  },
  components: {
    FormGenerator,
    GreenSoft,
  },

  methods: {
    async changePassword() {
      if (!this.isFormValidate()) return;
      try {
        await this.auth.resetPassword(this.form.password, this.$route.query);
        message.success(
          this.$_t("authentication.components.forget_password.reset_success")
        );
        await this.$router.replace({ name: "auth.login" });
      } catch (e) {
        console.log(e);
      }
    },
    isFormValidate() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
  },
};
</script>
<style lang="scss">
.v-form {
  div {
    width: 100%;
    margin: 0px;
  }
}
</style>
