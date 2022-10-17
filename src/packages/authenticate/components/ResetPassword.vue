<template>
  <div>Reset Password</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import api from "@/tools/Api";
import urls from "@/tools/Urls";

export default {
  name: "ResetPassword",
  components: {},
  data() {
    return {
      showPassword: false,
      showConfirmed: false,
      form: {
        newPassword: null,
        confirmPassword: null,
        token: null,
      },
    };
  },
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
    submit() {
      this.startLoading();
      api
        .post(urls.api("reset_password"), this.form)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "Login" });
        })
        .finally(() => {
          this.finishLoading();
        });
    },
  },
  created() {
    this.form.token = this.$route.query.token;
  },
};
</script>

<style scoped></style>
