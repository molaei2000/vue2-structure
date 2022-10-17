<template>
  <v-row class="justify-center">
    <v-col cols="1" class="pl-0 pr-0"></v-col>
    <v-col cols="4" class="pl-0 pr-0" style="padding-top: 20px">
      <slot v-if="$slots['label']" name="label" />
    </v-col>
    <v-col cols="6" class="pl-0">
      <slot
        :attrs="{ errorMessages: activeErrorMessages, success: isValid }"
        :hasErrors="hasErrors"
      />
    </v-col>
    <v-col cols="1" class="pl-0 pr-0"></v-col>
  </v-row>
</template>
<script>
import { singleErrorExtractorMixin } from "vuelidate-error-extractor";
export default {
  name: "FormGroup",
  extends: singleErrorExtractorMixin,
};
</script>
