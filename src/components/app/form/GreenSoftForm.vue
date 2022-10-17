<template>
  <v-form inlines class="d-flex flex-column justify-content-between">
    <v-col cols="12" class="mx-auto align-center">
      <v-row class="style-items-flex">
        <slot name="body" />
        <slot name="inline-action"></slot>
      </v-row>
      <v-row class="justify-content-end">
        <slot name="action" />
      </v-row>
    </v-col>
  </v-form>
</template>

<script>
export default {
  name: "GreenSoftForm",
};
</script>

<style scoped></style>
