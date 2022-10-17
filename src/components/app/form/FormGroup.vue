<template>
  <div style="width: 100%">
    <slot v-if="$slots['label']" name="label" />
    <slot
      :attrs="{ errorMessages: activeErrorMessages, success: isValid }"
      :hasErrors="hasErrors"
    />
  </div>
</template>
<script>
import { singleErrorExtractorMixin } from "vuelidate-error-extractor";
export default {
  name: "FormGroup",
  extends: singleErrorExtractorMixin,
};
</script>
