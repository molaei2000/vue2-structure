<template>
  <v-card
    min-height="530"
    width="1000px"
    elevation="10"
    class="d-flex justify-center align-content-center flex-column card-shadow"
  >
    <v-card-text class="px-12" @keypress.enter="submit">
      <h1 class="mb-6 pb-3 black--text">
        {{ $_t("authentication.components.register.title") }}
      </h1>
      <GreenSoftForm>
        <!--Start form body    ------------------------------------------------------------------>
        <template v-slot:body>
          <!--Start form wrapper for catch errors  ------------------------>
          <FormGenerator
            lg="10"
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
              color="primary"
              block
              @click="submit"
              :loading="is_loading"
              :disabled="is_loading || $v.$error"
            >
              {{
                $_t("authentication.components.register.buttons.submit")
              }}
            </v-btn>
          </v-col>
        </template>
        <!--End   form actions ------------------------------------------------------------------>
      </GreenSoftForm>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GreenSoftForm from "@/components/app/form/MainSoftForm";
import FormGenerator from "@/components/app/form/MyFormGenerator";
import { REGISTER_LOGIN_SCHEMA } from "@/packages/authenticate/schema/forms/REGISTER_SCHEMA";
import message from "@/tools/Message";
import storage from "@/tools/Storage";

export default {
  name: "Register",
  components: {
    FormGenerator,
    GreenSoftForm,
  },
  computed: {
    ...mapGetters({
      is_loading: "loading/is_loading",
    }),
  },
  data: () => ({
    schema: REGISTER_LOGIN_SCHEMA.schema,
    form: REGISTER_LOGIN_SCHEMA.model,
  }),
  validations: {
    ...REGISTER_LOGIN_SCHEMA.validations,
  },
  methods: {
    ...mapActions({
      openDialog: "dialog/openDialog",
    }),
    async submit() {
      try {
        if (!this.isFormValidate()) return;
        const res = await this.$actions.register({
          mobileNumber: this.form.mobile_number,
          password: this.form.password,
          clientId: process.env.VUE_APP_CLIENT_ID,
          clientSecret: process.env.VUE_APP_CLIENT_SECRET,
          captchaCode: process.env.VUE_APP_CAPTCHA_CODE,
        });
        storage.set("mobileNumber", this.form.mobile_number);
        //console.log(res, "status Code"); // res.statusCode === 'Success' || 2
        if (
          res.statusCode === "Success" ||
          res.StatusCode === "Success" ||
          res.StatusCode === 2
        ) {
          const res = await this.$actions.requestMobileVerify({
            mobileNumber: this.form.mobile_number,
          });
          if (res.data) {
            message.success("SEND_CODE_SUCCESS");
            this.openDialog();
            if (!storage.get("now"))
              storage.set("now", new Date(new Date().getTime() + 120000));
          }
        }
      } catch (e) {
        console.log(e, "ERR");
      }
    },
  },
  mounted() {
    document.getElementById("fullName").focus();
  },
};
</script>
