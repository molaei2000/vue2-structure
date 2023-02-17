<template>
  <v-dialog
    v-bind="$attrs"
    v-model="dialog"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" :on="on" :attts="attrs"> </slot>
    </template>
    <v-card>
      <slot name="body"> </slot>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AdminDialog",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped></style>
