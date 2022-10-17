<template>
  <form-wrapper :validator="validator.form" class="w-100">
    <slot v-if="$slots['form-body']" name="form-body" />
    <v-row v-else>
      <!--Start form inputs  ---------------------->
      <v-col
        v-for="input in schema"
        :key="'key-' + input.id"
        v-bind="$attrs"
        :cols="input.cols || 12"
        :lg="input.lg || $attrs.lg"
        :md="input.md || 6"
        class="py-0"
      >
        <form-group
          v-if="['text', 'password', 'email'].includes(input.type)"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
        >
          <template v-slot:label>
            <p
              v-if="input.label"
              class="black--text text-left text-capitalize mb-1"
            >
              {{ $_t(`${input.label}`) }}
            </p>
          </template>
          <v-text-field
            slot-scope="{ attrs }"
            flat
            dense
            outlined
            solo
            background-color="grey lighten-3"
            :placeholder="$_t(`${input.placeholder}`)"
            v-bind="attrs"
            :type="input.type"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          />
        </form-group>
        <form-group
          v-if="['select'].includes(input.type)"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
        >
          <template v-slot:label>
            <p
              v-if="input.label"
              class="black--text text-left text-capitalize mb-1"
            >
              {{ $_t(`${input.label}`) }}
            </p>
          </template>
          <v-select
            slot-scope="{ attrs }"
            flat
            dense
            outlined
            solo
            :clearable="input.clearable || true"
            :items="input.items"
            :item-text="input.itemText || 'name'"
            :item-value="input.itemValue || ((item) => item)"
            background-color="grey lighten-3"
            :placeholder="$_t(`${input.placeholder}`)"
            v-bind="attrs"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          />
        </form-group>
      </v-col>
      <!--End   form inputs  ---------------------->
      <slot name="inline-action" />
    </v-row>
  </form-wrapper>
</template>

<script>
import FormGroup from "@/components/app/form/FormGroup";
import { templates } from "vuelidate-error-extractor";

export default {
  name: "v-model",
  props: {
    schema: {
      type: Array,
    },
    validator: {
      type: Object,
    },
  },
  components: {
    FormGroup,
    FormWrapper: templates.FormWrapper,
  },
};
</script>

<style>
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 5px !important;
  margin-bottom: 2px !important;
}
.v-input__slot {
  padding-top: 0px !important;
  margin-bottom: 0px !important;
}
</style>
