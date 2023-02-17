const { required, sameAs, minLength } = require("vuelidate/lib/validators");

export const REGISTER_LOGIN_SCHEMA = {
  /* Form SCHEMA */
  schema: [
    {
      id: "fullName",
      label: "fullName",
      placeholder: "",
      cols: 12,
      lg: 6,
      md: 12,
      sm: 12,
      type: "text",
    },
    {
      id: "nickName",
      label: "nickName",
      placeholder: "",
      cols: 12,
      lg: 6,
      md: 12,
      sm: 12,
      type: "text",
    },
    {
      id: "userName",
      label: "userName",
      placeholder: "",
      cols: 12,
      lg: 6,
      md: 12,
      sm: 12,
      type: "text",
    },
    {
      id: "permissions",
      label: "permissions",
      placeholder: "",
      cols: 12,
      lg: 6,
      md: 12,
      sm: 12,
      type: "select",
      items: [],
    },
    {
      id: "password",
      label: "password",
      placeholder: "",
      cols: 12,
      lg: 6,
      md: 12,
      sm: 12,
      type: "password",
    },
    {
      id: "confirm_password",
      label: "confirm_password",
      placeholder: "",
      cols: 12,
      lg: 6,
      md: 12,
      sm: 12,
      type: "password",
    },
  ],

  /* Form MODEL */
  model: {
    fullName: null,
    nickName: null,
    userName: null,
    permissions: null,
    password: null,
    confirm_password: null,
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      fullName: { required },
      nickName: { required },
      userName: { required },
      permissions: { required },
      password: { required, minLength: minLength(8) },
      confirm_password: { required, sameAsPassword: sameAs("password") },
    },
  },
};
