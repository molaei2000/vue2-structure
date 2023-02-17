<template>
  <div>
    <v-row>
      <v-col cols="12">
        <AdminActions
          :showUsers="true"
          :showLessons="false"
          :showSpecifications="false"
        />
      </v-col>
      <v-col cols="12">
        <UsersTable :itemsPerPage="20" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UsersTable from "@/packages/admin/components/users/UsersTable";
import AdminActions from "@/packages/admin/components/AdminActions";

export default {
  name: "Users",
  components: { AdminActions, UsersTable },
  data: () => ({}),
};
</script>

<style scoped></style>
