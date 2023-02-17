<template>
  <div class="d-flex justify-center">
    <v-card
      v-if="!is_code_sent"
      width="370"
      height="400px"
      class="my-15 d-flex flex-column justify-lg-space-around"
    >
      <v-card-title class="d-block justify-center pt-10 px-12">
        <p
          class="text-center primary--text text-display-1 font-weight-bold mb-0"
        >
          فراموشی رمز عبور
        </p>
      </v-card-title>
      <Back />

      <v-card-text style="position: relative" class="px-12">
        <v-row>
          <v-col cols="12">
            <MainSoftForm>
              <template v-slot:body>
                <FormGenerator :schema="schema" :validator="$v"
              /></template>
              <template v-slot:action>
                <v-row class="d-flex justify-center resentLink"
                  ><v-col cols="12">
                    <v-btn
                      @click="submit"
                      :loading="is_loading"
                      :disabled="is_loading || $v.$error"
                      class="primary white--text"
                      width="100%"
                    >
                      ارسال رمز یکبار مصرف
                    </v-btn></v-col
                  ></v-row
                >
              </template>
            </MainSoftForm></v-col
          >
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      v-else
      height="400"
      width="370"
      class="d-flex align-center justify-center my-15"
    >
      <v-card-title class="d-flex justify-center align-center px-10">
        <p
          class="text-center primary--text text-display-1 font-weight-bold mb-0 text-break"
        >
          رمز یکبار مصرف با موفقیت ارسال شد.
        </p>
        <p
          class="text-center primary--text font-weight-bold mb-0 text-break text-decoration-underline"
        >
          لطفا بعد از ورود نسبت به تغییر رمز عبور خود از قسمت پروفایل اقدام
          فرمایید.
        </p>
        <v-btn
          @click="$router.replace({ name: 'auth.login' })"
          class="primary white--text mt-10"
          width="100%"
        >
          ورود
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { RESET_PASSWORD } from "@/packages/authenticate/schema/forms/RESET_PASSWORD";
import FormGenerator from "@/components/app/form/MyFormGenerator";
import MainSoftForm from "@/components/app/form/MainSoftForm";
import Back from "@/components/app/Back";
export default {
  name: "GetUsername",
  components: { Back, MainSoftForm, FormGenerator },
  data() {
    return {
      is_code_sent: false,
      schema: RESET_PASSWORD.schema,
      form: RESET_PASSWORD.model,
    };
  },
  validations: { ...RESET_PASSWORD.validations },
  computed: {
    ...mapGetters({
      is_loading: "loading/is_loading",
    }),
  },
  methods: {
    async submit() {
      if (!this.isFormValidate()) return;
      let response = await this.$actions.oneTimePass({
        mobileNumber: this.form.mobile_number,
      });
      console.log(response, "one time pass res");
      if (response) {
        this.is_code_sent = true;
      } else {
        this.is_code_sent = false;
      }
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
