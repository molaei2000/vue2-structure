const { required, email } = require("vuelidate/lib/validators");

export const RESET_PASSWORD = {
  /* Form SCHEMA */
  schema: [
    {
      id: "email",
      label: "email",
      placeholder: "email",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "text",
    },
  ],

  /* Form MODEL */
  model: {
    email: null,
    reset_url:
      process.env.VUE_APP_RESET_PASS_URL ||
      "https://app.appmaker24.com/reset-password",
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      email: { required, email },
    },
  },
};
