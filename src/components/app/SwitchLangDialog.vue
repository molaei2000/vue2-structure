<template>
  <v-dialog width="300px">
    <template v-slot:activator="{ on, attrs }">
      <div style="width: auto" v-bind="attrs" v-on="on">
        <slot name="activator" />
      </div>
    </template>
    <template v-slot:default>
      <v-card>
        <v-card-title>
          <span class="text-h5">
            {{ $_t("components.app.header.language.change_language") }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(language, index) in lang_items"
              :key="index"
              @click="changeLocal(language.key)"
            >
              <v-list-item-action>
                <span> {{ language.key }}</span>
              </v-list-item-action>
              <v-list-item-title>
                {{ language.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import app from "@/tools/App";
import storage from "@/tools/Storage";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";

export default {
  name: "SwitchLangDialog",
  data: () => ({
    lang_items: app.lang_items,
    services: new AuthenticationServices(),
  }),
  props: {},
  methods: {
    changeLocal(key) {
      storage.set("lang", key);
      const payload =
        key === "en" ? { language: "en-US" } : { language: "sv-SE" };
      this.services.changLang(["id", "language"], { ...payload });
      this.select_lang_dialog = false;
      window.location.reload();
    },
    click() {
      this.open = true;
    },
  },
};
</script>

<style scoped></style>
