<template>
  <MainSoftForm>
    <template v-slot:body>
      <MyFormGenerator :validator="$v" :schema="schema" />
    </template>
    <template v-slot:action>
      <v-row>
        <v-col cols="6" class="pt-0 pr-6">
          <v-btn
            color="success"
            :loading="is_loading"
            :disabled="is_loading || $v.$error"
            @click="submit"
            block
            >{{ $_t("attribute.send") }}</v-btn
          >
        </v-col>
        <v-col cols="6" class="pt-0 pl-6">
          <v-btn
            color="primary"
            :loading="is_loading"
            :disabled="is_loading || !isEnd"
            @click="resend"
            block
          >
            {{ $_t("attribute.resend_code") }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </MainSoftForm>
</template>

<script>
import MainSoftForm from "@/components/app/form/MainSoftForm";
import MyFormGenerator from "@/components/app/form/MyFormGenerator";
import { VERIFY_SCHEMA } from "@/packages/authenticate/schema/forms/VERIFY_CODE_SCHEMA";
import message from "@/tools/Message";
import { mapActions, mapGetters } from "vuex";
import storage from "@/tools/Storage";
export default {
  name: "VerifyCode",
  components: {  MyFormGenerator, MainSoftForm },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    form: VERIFY_SCHEMA.model,
    schema: VERIFY_SCHEMA.schema,
    isEnd: false,
  }),
  validations: {
    ...VERIFY_SCHEMA.validations,
  },
  computed: {
    ...mapGetters({
      is_loading: "loading/is_loading",
    }),
    getTime() {
      return storage.get("now");
    },
    getMobileNumber() {
      return storage.get("mobileNumber");
    },
  },
  methods: {
    ...mapActions({
      closeDialog: "dialog/closeDialog",
    }),
    async submit() {
      try {
        if (!this.isFormValidate()) return;
        const res = await this.$actions.verifyCode({
          mobileNumber: this.data.mobile_number,
          code: this.form.code,
        });
        console.log(res, "in verifyCode");
        await this.$store.dispatch(
          "authentication/saveToken",
          res.access_token
        );
        await this.$store.dispatch(
          "authentication/saveRefreshToken",
          res.access_token
        );
        await this.$store.dispatch(
          "authentication/saveExpiration",
          res.access_token
        );
        const auth_data = await this.$actions.getUser();
        if (auth_data) {
          storage.remove("now");
          storage.remove("mobileNumber");
          message.success("LOGIN_SUCCESS");
          console.log(auth_data, "user data in verifyCode");
          await this.$router.push({ name: "dashboard.main" });
        }
        this.closeDialog();
      } catch (e) {
        console.log(e);
      }
    },
    async resend() {
      const res = await this.$actions.requestMobileVerify({
        mobileNumber: this.getMobileNumber || this.data.mobile_number,
      });
      if (res.data) {
        message.success("SEND_CODE_SUCCESS");
        this.isEnd = false;
        storage.set("now", new Date(new Date().getTime() + 120000));
      }
    },
  },
};
</script>

<style scoped></style>
