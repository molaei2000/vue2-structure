<template>
  <div>
    <img
      alt="gr-code"
      class="fixed"
      width="212"
      height="212"
      v-if="image_data"
      :src="image_data"
    />
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  name: "QrCode",
  props: {
    text: {
      default: null,
    },
  },
  components: {},
  data: () => ({
    image_data: null,
  }),
  watch: {
    text: function () {
      this.setCode();
    },
  },
  mounted() {
    this.setCode();
  },
  methods: {
    setCode() {
      if (!this.text) return;

      QRCode.toDataURL(this.text, (err, url) => {
        this.image_data = url;
      });
    },
  },
};
</script>

<style scoped>
.fixed {
  background: fixed;
  background-size: contain;
  max-width: 212px;
  max-height: 212px;
}
</style>
