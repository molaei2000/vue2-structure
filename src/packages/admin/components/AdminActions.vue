<template>
  <div class="mt-9">
    <v-row class="justify-lg-space-between">
      <v-col cols="6">
        <v-text-field
          :label="$_t('admin.components.admin_actions.search')"
          outlined
          dense
          v-model="search"
        >
        </v-text-field>
      </v-col>
      <v-col cols="2" v-if="showUsers">
        <AdminDialog width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              width="11rem"
              height="2.5rem"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-3">mdi-account-plus-outline</v-icon>
              {{ $_t("admin.components.admin_actions.add_user") }}
            </v-btn>
          </template>
          <template v-slot:body> heeeeeeeeey its working </template>
        </AdminDialog>
      </v-col>
      <v-col cols="2" v-if="showLessons">
        <AdminDialog>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              width="11rem"
              height="2.5rem"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-3">mdi-book-open-page-variant-outline</v-icon>
              {{ $_t("admin.components.admin_actions.add_lesson") }}
            </v-btn>
          </template>
          <template v-slot:body> heeeeeeeeey its working </template>
        </AdminDialog>
      </v-col>
      <v-col cols="2" v-if="showSpecifications">
        <AdminDialog>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              width="11rem"
              height="2.5rem"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-3">mdi-book-open-page-variant-outline</v-icon>
              {{ $_t("admin.components.admin_actions.add_specification") }}
            </v-btn>
          </template>
          <template v-slot:body> heeeeeeeeey its working </template>
        </AdminDialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from "vue";
import AdminDialog from "@/packages/admin/components/AdminDialog";

export default {
  name: "AdminActions",
  components: { AdminDialog },
  props: {
    showUsers: {
      default: true,
      type: Boolean,
    },
    showLessons: {
      default: true,
      type: Boolean,
    },
    showSpecifications: {
      default: true,
      type: Boolean,
    },
  },
  setup() {
    const search = ref("");
    const dialog = ref(false);
    return { search, dialog };
  },
};
</script>

<style scoped></style>
