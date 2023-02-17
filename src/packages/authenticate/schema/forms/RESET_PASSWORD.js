import { helpers, numeric, required } from "vuelidate/lib/validators";

export const RESET_PASSWORD = {
  /* Form SCHEMA */
  schema: [
    {
      id: "mobile_number",
      label: "mobile_number",
      placeholder: "mobile_number",
      cols: 12,
      lg: 12,
      md: 12,
      sm: 12,
      type: "mobile",
    },
  ],

  /* Form MODEL */
  model: {
    mobile_number: null,
  },

  /* VALIDATION SCHEMA */
  validations: {
    form: {
      mobile_number: {
        required,
        numeric,
        phone_number: helpers.regex(
          "phone_number",
          /^[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{5}$/
        ),
      },
    },
  },
};
