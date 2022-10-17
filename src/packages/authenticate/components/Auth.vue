<template>
  <v-card
    min-height="530"
    width="370"
    class="d-flex justify-center align-content-center flex-column card-shadow"
  >
    <v-card-text class="px-12" @keypress.enter="submit">
      <h1 class="mb-6 pb-3 black--text">
        {{ $_t("authentication.components.auth.title") }}
      </h1>
      <GreenSoftForm>
        <!--Start form body    ------------------------------------------------------------------>
        <template v-slot:body>
          <!--Start form wrapper for catch errors  ------------------------>
          <FormGenerator
            lg="6"
            :schema="schema"
            :validator="$v"
            :enter="submit"
          ></FormGenerator>
          <!--End   form wrapper for catch errors  ------------------------>
        </template>
        <!--End   form body    ------------------------------------------------------------------>

        <!--Start form actions ------------------------------------------------------------------>
        <template v-slot:action>
          <v-btn
            class="mt-10"
            color="primary"
            :loading="is_loading"
            block
            @click="submit"
            :disabled="is_loading || $v.$error"
          >
            {{ $_t("authentication.components.auth.buttons.submit_text") }}
          </v-btn>
          <router-link
            :to="{ path: '/password/forgot' }"
            class="text-decoration-none text-primary pt-5"
          >
            {{
              $_t("authentication.components.auth.buttons.forgotten_password")
            }}
          </router-link>
        </template>
        <!--End   form actions ------------------------------------------------------------------>
      </GreenSoftForm>
    </v-card-text>
  </v-card>
</template>

<script>
import { FORM_LOGIN_SCHEMA } from "@/packages/authenticate/schema/forms/LOGIN_SCHEMA";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
import { mapGetters } from "vuex";
import GreenSoftForm from "@/components/app/form/GreenSoftForm";
import FormGenerator from "@/components/app/form/AuthFormGenerator";
import message from "@/tools/Message";

export default {
  name: "Auth",
  components: { FormGenerator, GreenSoftForm },
  computed: {
    ...mapGetters({
      is_loading: "loading/is_loading",
      items: "dashboard/getApps",
    }),
  },
  data: () => ({
    AuthenticationService: new AuthenticationServices(),
    schema: FORM_LOGIN_SCHEMA.schema,
    form: FORM_LOGIN_SCHEMA.model,
  }),
  validations: {
    ...FORM_LOGIN_SCHEMA.validations,
  },
  methods: {
    async submit() {
      if (!this.isFormValidate()) return;
      try {
        const auth_data = await this.AuthenticationService.login(this.form);
        const user_data = await this.AuthenticationService.getUser(["*"]);
        if (auth_data && user_data) {
          message.success("LOGIN_SUCCESS");

          await this.$router.push({ name: "dashboard" });
        }
      } catch (e) {
        console.log(e, "ERR");
      }
    },

    /*
     *  Validate a form
     *  ------------------------
     *  @param validator {Object} (vuelidate object $v)
     *  ------------------------
     *  @return {Boolean}
     *  ------------------------
     */
    isFormValidate() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
  },
  mounted() {
    document.getElementById("email").focus();
  },
};
</script>
