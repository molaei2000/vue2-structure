import { minLength, sameAs, required } from "vuelidate/lib/validators";
export const CHANGE_PASSWORD = {
  /* Form SCHEMA */
  schema: [
    {
      id: "password",
      label: "password",
      placeholder: "password",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "password",
      required: true,
    },
    {
      id: "confirm",
      label: "confirm",
      placeholder: "confirm",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "password",
      required: true,
    },
  ],

  /* Form MODEL */
  model: {
    password: null,
    confirm: null,
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      password: { required, minLength: minLength(8) },
      confirm: { required, sameAsPassword: sameAs("password") },
    },
  },
};
