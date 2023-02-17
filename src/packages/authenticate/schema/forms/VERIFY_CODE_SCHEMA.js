const { required } = require("vuelidate/lib/validators");

export const VERIFY_SCHEMA = {
  /* Form SCHEMA */
  schema: [
    {
      id: "code",
      label: "code",
      placeholder: "code",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "text",
    },
  ],

  /* Form MODEL */
  model: {
    code: null,
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      code: {
        required,
      },
    },
  },
};
