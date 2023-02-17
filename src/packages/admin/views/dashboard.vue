<template>
  <div>
    <v-row>
      <v-col cols="12">
        <AdminActions />
      </v-col>
      <v-col cols="12">
        <UsersTable />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AdminActions from "@/packages/admin/components/AdminActions";
import UsersTable from "@/packages/admin/components/users/UsersTable";
export default {
  name: "dashboard",
  components: { UsersTable, AdminActions },
};
</script>

<style scoped></style>
