<template>
  <v-card
    min-height="530"
    width="370"
    elevation="10"
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
          <v-col cols="12">
            <v-btn
              class="mt-10"
              color="primary"
              block
              @click="submit"
              :loading="is_loading"
              :disabled="is_loading || $v.$error"
            >
              {{ $_t("authentication.components.auth.buttons.submit") }}
            </v-btn>
          </v-col>
        </template>
        <!--End   form actions ------------------------------------------------------------------>
      </GreenSoftForm>
    </v-card-text>
  </v-card>
</template>

<script>
import { FORM_LOGIN_SCHEMA } from "@/packages/authenticate/schema/forms/LOGIN_SCHEMA";
import { mapGetters } from "vuex";
import GreenSoftForm from "@/components/app/form/MainSoftForm";
import FormGenerator from "@/components/app/form/MyFormGenerator";
import message from "@/tools/Message";

export default {
  name: "Auth",
  components: { FormGenerator, GreenSoftForm },
  computed: {
    ...mapGetters({
      is_loading: "loading/is_loading",
    }),
  },
  data: () => ({
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
        const auth_data = await this.$actions.login({
          userName: this.form.userName,
          password: this.form.password,
          clientId: process.env.VUE_APP_CLIENT_ID,
          clientSecret: process.env.VUE_APP_CLIENT_SECRET,
          captchaCode: process.env.VUE_APP_CAPTCHA_CODE,
        });
        if (auth_data) {
          message.success("LOGIN_SUCCESS");
          if (auth_data.isAdmin)
            return await this.$router.push({ name: "admin.main" });
          await this.$router.push({ name: "dashboard.main" });
        }
      } catch (e) {
        console.log(e, "ERR");
      }
    },
  },
  mounted() {
    document.getElementById("userName").focus();
  },
};
</script>
