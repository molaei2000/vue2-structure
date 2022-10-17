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
    :max-width="sizeModal"
  >
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
  </v-dialog>
</template>
<script>
export default {
  name: "KurwModal",
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
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
  computed: {
    sizeModal() {
      return this.size + "px";
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
