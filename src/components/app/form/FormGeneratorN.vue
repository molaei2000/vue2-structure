<template>
  <form-wrapper
    :validator="validator.form"
    class="form-generator"
    width="100%"
    style="width: 100%"
  >
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
        class="py-0 flex-column flex-wrap"
        style="position: realitive"
        :style="{ maxHeight: input.height + 'px' }"
        max-height="108px"
        :class="input.class"
      >
        <form-group
          v-if="['text'].includes(input.type)"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
          :style="input.style"
        >
          <template v-slot:label>
            <div>
              <p
                v-if="
                  input.label &&
                  input.label !== 'email_login' &&
                  input.label !== 'login_password' &&
                  input.label !== 'voucher_code'
                "
                class="form-generator__label text-break text-body-2 black--text text-left mb-0 d-flex justify-start align-center"
                :class="input.disabled ? 'text--disabled' : ''"
              >
                {{ $_t(`attribute.${input.label}`) }}
                {{ input.required ? "*" : "" }}
              </p>

              <v-checkbox
                v-if="input.labelCheckBox === true"
                class="ma-0 pa-0 black--text mb-1 pb-1"
                input-value="true"
                hide-details
                :label="$_t('course.components.register_course.voucher')"
                value
                size="12px"
                height="15px"
                v-model="input.check_voucher"
              ></v-checkbox>
            </div>
          </template>
          <v-text-field
            :id="input.id"
            class="form-generator__text-field"
            :class="input.class"
            slot-scope="{ attrs }"
            v-bind="attrs"
            background-color="inputColor"
            :disabled="input.disabled"
            flat
            dense
            outlined
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :type="input.type"
            v-model.trim="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
            @keydown.enter="() => $emit('onPressEnter')"
          />
        </form-group>

        <form-group
          v-if="input.type === 'password'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
          :style="input.style"
        >
          <template v-slot:label>
            <div>
              <p
                v-if="
                  input.label &&
                  input.label !== 'email_login' &&
                  input.label !== 'login_password' &&
                  input.label !== 'voucher_code'
                "
                class="form-generator__label text-break text-break text-body-2 black--text text-left mb-0 d-flex justify-start align-center"
                :class="input.disabled ? 'text--disabled' : ''"
              >
                {{ $_t(`attribute.${input.label}`) }}
                {{ input.required ? "*" : "" }}
              </p>
            </div>
          </template>
          <v-text-field
            :id="input.id"
            class="form-generator__text-field"
            :class="input.class"
            slot-scope="{ attrs }"
            v-bind="attrs"
            :disabled="input.disabled"
            flat
            dense
            outlined
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :type="show ? 'text' : input.type"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
            @keydown.enter="() => $emit('onPressEnter')"
          />
        </form-group>
        <form-group
          v-if="input.type === 'select'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline '"
        >
          <template v-slot:label>
            <p
              class="d-flex mb-0 justify-space-between text-break text-body-2 form-generator__label text-break black--text text-left"
              :class="input.disabled ? 'text--disabled' : ''"
            >
              {{ $_t(`attribute.${input.label}`) }}
              {{ input.required ? "*" : "" }}
            </p>
          </template>
          <v-select
            class="form-generator__text-field"
            slot-scope="{ attrs }"
            v-bind="attrs"
            background-color="inputColor"
            flat
            dense
            outlined
            solo
            item-text="text"
            item-value="value"
            return-object
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :menu-props="{
              'offset-y': true,
              'nudge-top': -1,
            }"
            v-model="validator.form[input.id].$model"
            :disabled="input.disabled"
            :items="input.items"
            @input="validator.form[input.id].$touch()"
          />
        </form-group>

        <form-group
          v-if="input.type === 'textarea'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline '"
        >
          <template v-slot:label>
            <p
              class="d-flex mb-0 justify-space-between text-break text-body-2 form-generator__label black--text text-left text-break"
              :class="input.disabled ? 'text--disabled' : ''"
            >
              {{ $_t(`attribute.${input.label}`) }}
              {{ input.required ? "*" : "" }}
            </p></template
          >
          <v-textarea
            class="form-generator__text-field"
            slot-scope="{ attrs }"
            flat
            dense
            outlined
            solo
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            v-bind="attrs"
            v-model.trim="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
            :style="{ maxHeight: input.height + 'px' }"
          ></v-textarea>
        </form-group>
      </v-col>
      <!--End   form inputs  ---------------------->
      <slot name="inline-action" />
    </v-row>
  </form-wrapper>
</template>

<script>
import FormGroup from "@/components/app/form/FormGroupN";
import { templates } from "vuelidate-error-extractor";

export default {
  name: "FormGeneratorN",
  data: () => {
    return {
      isVoucherCode: true,
      show: false,
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

<style lang="scss">
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
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 0px !important;
  padding-top: 3px !important;
  margin-bottom: 1px !important;
}

.v-input__slot {
  padding-top: 0px !important;
  margin-bottom: 0px !important;
}

.v-application--is-ltr
  .v-textarea.v-text-field--enclosed
  .v-text-field__slot
  textarea {
  max-height: 109px !important;
}
</style>
