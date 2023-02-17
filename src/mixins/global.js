export default function (app) {
  app.mixin({
    methods: {
      isFormValidate() {
        this.$v.$touch();
        return !this.$v.$invalid;
      },
      generateUrl(id) {
        if (id)
          return `${process.env.VUE_APP_BASE_URL}uploads/thumbnails/${id}`;
        return null;
      },
    },
  });
}
