<template>
  <ul class="d-flex flex-row list mt-6">
    <li>{{ $_t("authentication.components.login_footer.copy_right") }}</li>
    <li>
      <span class="mr-1">|</span
      >{{ $_t("authentication.components.login_footer.company_name")
      }}<span class="ml-1">|</span>
    </li>
    <li>{{ $_t("authentication.components.login_footer.developed_by") }}</li>
  </ul>
</template>

<script>
export default {
  name: "LoginFooter",
};
</script>

<style scoped>
.list {
  list-style: none;
  padding-left: 0 !important;
}
.list > li {
  margin: 0 5px;
  color: white;
}
</style>
