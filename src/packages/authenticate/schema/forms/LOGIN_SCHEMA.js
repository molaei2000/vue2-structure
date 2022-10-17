const { required, email } = require("vuelidate/lib/validators");

export const FORM_LOGIN_SCHEMA = {
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
    {
      id: "password",
      label: "password",
      placeholder: "password",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "password",
    },
  ],

  /* Form MODEL */
  model: {
    email: null,
    password: null,
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
};
