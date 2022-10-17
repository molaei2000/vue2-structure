<template>
  <div>
    <div v-if="data !== null && data.text !== undefined">
      <v-snackbar
        key="0"
        v-model="show"
        :color="data.color || 'default'"
        :timeout="5000"
        :right="true"
        :multi-line="60 < data.text.length"
        :bottom="true"
      >
        {{ data.text.toUpperCase() }}

        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="show = false">
            {{ $_t("components.app.snackbar.close") }}
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      loading: false,
      show: true,
    };
  },
  computed: {
    data() {
      return this.$store.state.messages.data;
    },
  },
  watch: {
    "$store.state.messages.data": function () {
      this.show = true;
    },
  },
  methods: {},
};
</script>

<style></style>
