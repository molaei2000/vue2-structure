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
        <FormGroup :name="input.id" :attribute="$_t(`attribute.${input.id}`)">
          <template v-slot:label v-if="input.label">
            <p
              class="black--text text-left text-capitalize mb-1"
              style="width: 200px"
              :class="input.class"
            >
              {{ $_t(`attribute.${input.label}`) }}
            </p>
          </template>
          <v-select
            v-if="input.type === 'select'"
            dense
            flat
            solo
            outlined
            :class="input.class"
            slot-scope="{ attrs }"
            v-bind="attrs"
            :items="lists[input.id]"
            item-text="name"
            :placeholder="$_t(`placeholder.${input.placeholder}`)"
            :item-value="(item) => ({ id: item.id, name: item.name })"
            @input="
              validator.form[input.id].$touch();
              $emit('update', $event);
            "
            v-model="validator.form[input.id].$model"
            background-color="inputColor"
            color="primary"
          />
          <v-text-field
            v-else-if="input.type === 'password'"
            outlined-red
            :disabled="input.disabled === 'true'"
            class="form-generator__text-field"
            slot-scope="{ attrs }"
            flat
            background-color="inputColor"
            dense
            outlined
            solo
            :id="input.id"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            :type="show ? 'text' : input.type"
            :hint="input.hint"
            persistent-hint
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            item-text="name"
            item-value="id"
            v-bind="attrs"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
            @keydown.enter="$emit('enter')"
          />
          <v-text-field
            v-else
            slot-scope="{ attrs }"
            :class="input.class"
            flat
            :id="input.id"
            dense
            outlined
            solo
            background-color="inputColor"
            color="primary"
            :placeholder="$_t(`placeholder.${input.placeholder}`)"
            v-bind="attrs"
            :type="input.type"
            @input="validator.form[input.id].$touch()"
            v-model="validator.form[input.id].$model"
          />
        </FormGroup>
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
  name: "AuthFormGenerator",
  data: () => ({
    show: false,
  }),
  props: {
    schema: {
      type: Array,
    },
    lists: {
      type: Object,
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

<style scoped></style>
