<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :page.sync="pageInfo.page"
      :items-per-page="pageInfo.itemsPerPage"
      hide-default-footer
      class="elevation-0"
      @page-count="pageInfo.pageCount = $event"
    >
      <template v-slot:item.fullName="{ item }">
        <span class="text-capitalize">
          <slot name="fullName" :item="item"></slot>
        </span>
      </template>
      <template v-slot:item.permissions="{ item }">
        <span class="text-capitalize">
          <slot name="permissions" :item="item"></slot>
        </span>
      </template>
      <template v-slot:item.actions="{ item }">
        <slot name="actions" :item="item"></slot>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <slot name="pagination" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTable",
  props: {
    headers: {
      required: true,
      type: Array,
    },
    items: {
      required: true,
      type: Array,
    },
    pageInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
