<template>
  <b-col cols="12" class="border-bottom border-1 border-danger">
    <!--Start Close icon ------------------------------------------------------------->
    <div class="w-100 pointer flex-row-reverse" @click.stop="closeModal">
      <lipak-icon icon="times" class="fs-12 text-danger"></lipak-icon>
    </div>
    <!--End   Close icon ------------------------------------------------------------->

    <!--Start Title      ------------------------------------------------------------->
    <h6 class="fs-6 text-center text-danger py-3">
      {{ title }}
    </h6>
    <!--Start Title      ------------------------------------------------------------->
  </b-col>
</template>

<script>
export default {
  name: "ModalHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
</style>
