<template>
  <v-footer elevation="0" color="primary">
    <v-container class="px-xl-15">
      <v-row class="px-3">
        <v-col cols="12" class="pa-0">
          <v-card
            width="100%"
            tile
            flat
            color="background"
            style="opacity: 0.5;"
            class="d-flex justify-space-between flex-md-row flex-column"
          >
            <span class="white--text justify-center pb-3 text-center">
              <span> {{ $_t("components.app.footer.shoulder") }}| </span>
              <a
                href="https://axelina.com/privacypolicy"
                class="text-decoration-none white--text"
              >
                {{ $_t("components.app.footer.policy") }}|
              </a>
              <a
                href="https://axelina.com/termsconditions"
                class="text-decoration-none white--text"
              >
                {{ $_t("components.app.footer.terms") }}
              </a>
            </span>
            <span class="d-flex justify-center">
              <span class="white--text justify-center pb-3 text-center pr-2">
                {{ $_t("components.app.footer.developed_by") }}
                <a
                  href="https://sepantech.com/"
                  class="text-decoration-none white--text"
                  target="_blank"
                >
                  {{ $_t("components.app.footer.sepantech") }} |
                </a>
              </span>
              <SwitchLangFooter />
            </span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import SwitchLangFooter from "@/components/app/SwichLangFooter";
export default {
  name: "Header",
  components: { SwitchLangFooter },
};
</script>

<style lang="scss" scoped></style>
