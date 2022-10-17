<template>
  <v-menu bottom left :offset-x="true" :offset-y="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="switchLang v-menu-btn"
        color="#000"
        text
        block
        v-bind="attrs"
        v-on="on"
      >
        <span class="mdi mdi-chevron-left"></span>
        <img class="v-menu-icon me-1" :src="flag(lang)" :alt="lang" />
        <span>{{ lang }}</span>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        dense
        class="v-menu-list-item"
        v-for="locale in recentlocales"
        :key="locale"
        @click="selectLang(locale)"
      >
        <v-list-item-title class="d-flex justify-space-around align-center">
          <img class="v-menu-icon me-1" :src="flag(locale)" :alt="locale" />
          <span>{{ locale }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      flags: [
        {
          code: "en",
          icon: require("@/assets/img/app/flags/us-flag.webp"),
        },
        {
          code: "sv",
          icon: require("@/assets/img/app/flags/sw-flag.webp"),
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      locales: "lang/locales",
      lang: "lang/lang",
    }),

    recentlocales() {
      return this.locales.filter((i) => i !== this.lang);
    },
  },

  methods: {
    ...mapActions({
      setLang: "lang/setI18nLang",
      setFont: "lang/setSiteFont",
    }),
    selectLang(code) {
      if (code === "fa") this.$vuetify.rtl = true;
      else this.$vuetify.rtl = false;
      this.setFont(code);
      this.setLang(code);
    },

    flag(code) {
      return this.flags.find((flag) => flag.code === code).icon;
    },
  },
};
</script>

<style lang="scss" scoped>
.langListItem {
  min-height: 10px;
  cursor: pointer;
}

.switchLang {
  width: 70px;
}

img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
