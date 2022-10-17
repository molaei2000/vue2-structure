<template>
  <SwitchLangDialog>
    <template v-slot:activator>
      <span style="cursor: pointer" class="white--text">
        {{ current_lang }} <span>&nbsp; ▾</span>
      </span>
    </template>
  </SwitchLangDialog>
</template>

<script>
import SwitchLangDialog from "@/components/app/SwitchLangDialog";
import app from "@/tools/App";

export default {
  name: "SwitchLangFooter",
  components: { SwitchLangDialog },
  data: () => ({
    lang_items: app.lang_items,
    current_lang: null,
    select_lang_dialog: null,
  }),
  mounted() {
    this.setLang();
  },
  methods: {
    setLang() {
      try {
        let local_key = this.$i18n.locale;
        let [item] = this.lang_items.filter((val) => val.key === local_key);
        this.current_lang = item ? item.title : "none";
      } catch (e) {
        this.current_lang = "none";
        console.error(e);
      }
    },
  },
};
</script>

<style scoped></style>
