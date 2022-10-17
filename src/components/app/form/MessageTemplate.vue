<template>
  <form-wrapper :validator="validator.form" class="col-12">
    <slot v-if="$slots['form-body']" name="form-body" />
    <v-row v-else>
      <!--Start form inputs  ---------------------->
      <v-col
        v-for="input in schema"
        :key="'key-' + input.id"
        v-bind="$attrs"
        :cols="input.cols || 12"
        class="py-0"
        :class="input.class"
      >
        <form-group :name="input.id" :attribute="$_t(`attribute.${input.id}`)">
          <template v-slot:label>
            <p
              v-if="input.label"
              class="black--text text-left mb-1"
            >
              {{ $_t(`attribute.${input.label}`) }}
            </p>
          </template>
          <v-textarea
            v-if="input.type === 'textarea'"
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
          <v-select
            v-else-if="input.type === 'select'"
            dense
            flat
            solo
            outlined
            :class="input.class"
            slot-scope="{ attrs }"
            v-bind="attrs"
            :items="input.items"
            item-text="title"
            :placeholder="$_t(`placeholder.${input.placeholder}`)"
            :item-value="(item) => item"
            @input="
              validator.form[input.id].$touch();
              $emit('update', $event);
            "
            v-model="validator.form[input.id].$model"
            background-color="inputColor"
            color="primary"
          />
          <v-text-field
            v-else
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
  name: "SMS",
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
  padding-top: 0px !important;
  margin-bottom: 2px !important;
}
.v-input__slot {
  padding-top: 0px !important;
  margin-bottom: 0px !important;
}
</style>
