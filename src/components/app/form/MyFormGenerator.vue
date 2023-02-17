<template>
  <form-wrapper
    :validator="validator.form"
    class="form-generator"
    style="width: 100%"
  >
    <slot v-if="$slots['form-body']" name="form-body" />
    <v-row v-else style="width: 100% !important" class="ma-0">
      <!--Start form inputs  ---------------------->
      <v-col
        v-for="input in schema"
        :key="'key-' + input.id"
        v-bind="$attrs"
        :cols="input.cols || 12"
        :lg="input.lg || $attrs.lg"
        :md="input.md || 6"
        class="flex-column flex-wrap pt-0"
        :class="input.class"
      >
        <!--        select -->
        <form-group
          v-if="input.type === 'select'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
          class="offset-xs7"
        >
          <v-select
            :disabled="input.disabled === 'true'"
            :label="$_t(`attribute.${input.label}`)"
            slot-scope="{ attrs }"
            v-bind="attrs"
            outlined
            :item-text="input.text || 'text'"
            :item-value="input.value || ((item) => item)"
            :items="input.items"
            dense
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :menu-props="{
              'offset-y': true,
              'nudge-top': -1,
              closeOnClick: true,
            }"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          ></v-select>
        </form-group>
        <!--                date -->
        <form-group
          v-if="input.type === 'date'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline '"
        >
          <v-menu
            ref="menu"
            v-if="input.type === 'date'"
            :close-on-content-click="false"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="validator.form[input.id].$model"
                :label="$_t(`attribute.${input.label}`)"
                :placeholder="
                  input.placeholder
                    ? $_t(`placeholder.${input.placeholder}`)
                    : ''
                "
                dense
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="validator.form[input.id].$model"
              locale="fa"
              no-title
              scrollable
            >
            </v-date-picker>
          </v-menu>
        </form-group>
        <!-- time -->
        <form-group
          v-if="input.type === 'time'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline '"
        >
          <template v-slot:label>
            <p
              class="d-flex justify-space-between form-generator__label black--text text-left text-capitalize mb-1"
            >
              {{ $_t(`attribute.${input.label}`) }}
            </p>
          </template>
          <v-text-field
            class="form-generator__text-field"
            slot-scope="{ attrs }"
            dense
            outlined
            solo
            color="primary"
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            v-bind="attrs"
            :type="input.type"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          />
          <v-time-picker
            v-model="validator.form[input.id].$model"
            no-title
          ></v-time-picker>
        </form-group>
        <!--        mobile number -->
        <form-group
          v-if="input.type === 'mobile'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
        >
          <v-text-field
            :id="input.id || ''"
            :disabled="input.disabled === 'true'"
            class="form-generator__text-field"
            :label="$_t(`attribute.${input.label}`)"
            dense
            outlined
            dir="ltr"
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :type="input.type"
            slot-scope="{ attrs }"
            v-bind="attrs"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          />
        </form-group>
        <!--        text or password -->
        <form-group
          v-if="['text', 'password'].includes(input.type)"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
        >
          <v-text-field
            :id="input.id || ''"
            :disabled="input.disabled === 'true'"
            class="form-generator__text-field"
            :label="$_t(`attribute.${input.label}`)"
            :suffix="input.suffix"
            dense
            outlined
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :type="input.type"
            slot-scope="{ attrs }"
            v-bind="attrs"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          />
        </form-group>
        <!-- file -->
        <form-group
          v-if="input.type === 'file'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
        >
          <v-file-input
            :label="$_t(`attribute.${input.label}`)"
            dense
            :multiple="input.multiple || false"
            chips
            :append-icon="input.icon ? input.icon : 'mdi-file-image'"
            outlined
            :accept="input.accept"
            slot-scope="{ attrs }"
            v-bind="attrs"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          ></v-file-input>
        </form-group>
        <!--        textarea -->
        <form-group
          v-if="input.type === 'textarea'"
          :name="input.id"
          :id="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
        >
          <v-textarea
            outlined
            name="input-7-4"
            :label="$_t(`attribute.${input.label}`)"
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            slot-scope="{ attrs }"
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
  name: "MyFormGenerator",
  inheritAttrs: false,
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      time: null,
      menu2: false,
      modal2: false,
      dialog: false,
    };
  },
  props: {
    schema: {
      type: Array,
    },
    validator: {
      type: Object,
    },
    inline: {
      type: Boolean,
    },
  },
  components: {
    FormGroup,
    FormWrapper: templates.FormWrapper,
  },
};
</script>

<style lang="scss" scoped>
.form-generator {
  $parent: &;
  &__group {
    &--inline {
      @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        #{$parent} {
          &__label {
            margin-top: 8px;
            flex-basis: 40%;
          }
          &__text-field {
            flex-basis: 60%;
          }
        }
      }
    }
  }
  .menuable__content.theme--light {
    z-index: 2 !important;
  }
}
</style>
