<template>
  <v-list-item two-line>
    <v-list-item-avatar>
      <v-img :src="asset_url + avatar" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title class="text-truncate">
        {{ user.first_name }} {{ user.last_name }}</v-list-item-title
      >
      <v-list-item-subtitle class="text-truncate">{{
        user.email
      }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <slot name="actions"></slot>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "authentication/user",
      avatar: "authentication/avatar",
      asset_url: "assets_url/assets_url",
    }),
  },
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<style lang="css">
.licence-font-size {
  font-size: 12px !important;
}
</style>
