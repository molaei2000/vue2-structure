<template>
  <form-wrapper :validator="validator.form" class="w-100 mx-auto">
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
        class="py-0 px-0"
      >
        <MyFormGroup :name="input.id" :attribute="$_t(`attribute.${input.id}`)">
          <template v-slot:label>
            <p
              class="black--text text-left mb-1 text-break text-body-2"
              v-if="input.required"
              :class="input.label_class"
            >
              {{ $_t(`attribute.${input.label}`) + " *" }}
            </p>
            <p
              class="black--text text-left mb-1 text-break text-body-2"
              v-else
              :class="input.label_class"
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
            :append-outer-icon="
              input.append_outer_icon ? input.append_outer_icon : ''
            "
            @click:append-outer="$emit('editHospital')"
          />
          <v-select
            v-else-if="input.type === 'select_status'"
            dense
            flat
            solo
            outlined
            :class="input.class"
            slot-scope="{ attrs }"
            v-bind="attrs"
            :items="statusList"
            :placeholder="$_t(`placeholder.${input.placeholder}`)"
            item-text="name"
            item-value="id"
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
            dense
            outlined
            solo
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
            @keydown.enter="onPressEnter"
          />
          <v-text-field
            v-else
            slot-scope="{ attrs }"
            :class="input.class"
            flat
            dense
            outlined
            solo
            :hint="input.hint"
            persistent-hint
            background-color="inputColor"
            color="primary"
            :placeholder="$_t(`placeholder.${input.placeholder}`)"
            v-bind="attrs"
            :type="input.type"
            @input="validator.form[input.id].$touch()"
            v-model.trim="validator.form[input.id].$model"
          />
        </MyFormGroup>
      </v-col>
      <!--End   form inputs  ---------------------->
      <slot name="inline-action" />
    </v-row>
  </form-wrapper>
</template>

<script>
import MyFormGroup from "@/components/app/form/MyFormGroup";
import { templates } from "vuelidate-error-extractor";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters({
      statusList: "userManagement/get_status_list",
    }),
  },
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
    MyFormGroup,
    FormWrapper: templates.FormWrapper,
  },
};
</script>

<style>
.v-input__icon--append-outer button {
  color: #00573f !important;
}
</style>
