<template>
  <v-dialog
    v-model="showModal"
    centered
    @hide="closeKurwModal"
    @ok="$emit('ok')"
    @cancel="$emit('cancel')"
    header-class="border-bottom-0"
    footer-class="border-top-0"
    persistent
    class="overflow-x-hidden"
    :max-width="width ? width : '1178px'"
  >
    <!--Start Header    ----------------------------------------------------------------------->
    <v-col
      cols="12"
      class="d-flex flex-column justify-content-end align-items-center my-3"
    >
      <span class="text-center text-h6">{{ title }} </span>
    </v-col>
    <!--End   Header    ----------------------------------------------------------------------->

    <v-col
      cols="12"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <slot name="body" />
    </v-col>
    <v-col
      cols="12"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <slot name="footer" />
    </v-col>
    <v-col
      cols="12"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <slot name="more" />
    </v-col>
  </v-dialog>
</template>
<script>
export default {
  name: "MyModal",
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    width: { type: String },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    modal(val) {
      this.showModal = val;
    },
  },
  methods: {
    closeKurwModal() {
      this.showModal = false;
      this.$emit("close");
    },
  },
};
</script>
<style>
.v-dialog {
  background-color: white !important;
}
</style>
