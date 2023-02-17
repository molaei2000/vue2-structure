const { required } = require("vuelidate/lib/validators");

export const FORM_LOGIN_SCHEMA = {
  /* Form SCHEMA */
  schema: [
    {
      id: "userName",
      label: "userName",
      placeholder: "",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "text",
    },
    {
      id: "password",
      label: "password",
      placeholder: "",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "password",
    },
  ],

  /* Form MODEL */
  model: {
    userName: null,
    password: null,
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      userName: {
        required,
      },
      password: { required },
    },
  },
};
