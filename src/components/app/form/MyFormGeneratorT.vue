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
        class="py-0 flex-column flex-wrap"
        :style="{ maxHeight: input.height + 'px' }"
        max-height="108px"
        :class="input.class"
      >
        <form-group
          v-if="input.type === 'select'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
          class="offset-xs7"
        >
          <template v-slot:label>
            <p
              class="d-flex justify-space-between form-generator__label black--text text-left mb-1"
              :class="input.labelClass"
            >
              {{ $_t(`attribute.${input.label}`) }}
            </p>
          </template>

          <v-select
            :disabled="input.disabled === 'true'"
            v-bind="attrs"
            slot-scope="{ attrs }"
            filled
            dense
            outlined
            solo
            item-text="text"
            :item-value="(item) => item"
            flat
            background-color="inputColor"
            single-line
            :items="input.items"
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :menu-props="{
              'offset-y': true,
              'nudge-top': -1,
            }"
            closeMenuOnScroll
            :hide-details="input.hide_detail"
            :type="input.type"
            v-model="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          ></v-select>
        </form-group>
        <form-group
          v-if="input.type === 'data'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline '"
        >
          <template v-slot:label>
            <p
              class="d-flex justify-space-between form-generator__label black--text text-left mb-1"
            >
              {{ $_t(`attribute.${input.label}`) }}
            </p>
          </template>
          <!-- data picker -->
          <v-menu
            ref="menu"
            v-if="input.type === 'data'"
            :close-on-content-click="false"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                filled
                dense
                outlined
                solo
                flat
                color="primary"
                background-color="inputColor"
                :placeholder="
                  input.placeholder
                    ? $_t(`placeholder.${input.placeholder}`)
                    : ''
                "
                v-model="validator.form[input.id].$model"
                @input="validator.form[input.id].$touch()"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="validator.form[input.id].$model"
              color="primary"
              header-color="primary"
              no-title
              scrollable
              :locale="$i18n.locale"
            >
            </v-date-picker>
          </v-menu>
        </form-group>

        <form-group
          v-if="input.type === 'time'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline '"
        >
          <template v-slot:label>
            <p
              class="d-flex justify-space-between form-generator__label black--text text-left mb-1"
            >
              {{ $_t(`attribute.${input.label}`) }}
            </p>
          </template>
          <v-text-field
            class="form-generator__text-field"
            slot-scope="{ attrs }"
            filled
            dense
            outlined
            solo
            flat
            color="primary"
            background-color="inputColor"
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
        <form-group
          v-if="input.type === 'text' || input.type === 'password'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
        >
          <template v-slot:label>
            <p
              v-if="input.label"
              class="d-flex justify-space-between form-generator__label black--text text-left mb-1"
              :class="input.labelClass"
            >
              {{ $_t(`attribute.${input.label}`) }}

              <!--              <v-tooltip top v-if="input.disabled">-->
              <!--                <template v-slot:activator="{ on, attrs }">-->
              <!--                  <section v-bind="attrs" v-on="on">-->
              <!--                    <v-icon right dark color="primary" size="20"-->
              <!--                      >fas fa-lock</v-icon-->
              <!--                    >-->
              <!--                  </section>-->
              <!--                </template>-->
              <!--                <span>You must email support to change this information </span>-->
              <!--              </v-tooltip>-->
            </p>
          </template>

          <v-text-field
            :disabled="input.disabled === 'true'"
            class="form-generator__text-field"
            slot-scope="{ attrs }"
            filled
            dense
            outlined
            solo
            flat
            color="primary"
            background-color="inputColor"
            :placeholder="
              input.placeholder ? $_t(`placeholder.${input.placeholder}`) : ''
            "
            :mask="input.mask"
            :hide-details="input.hide_detail"
            v-bind="attrs"
            :type="input.type"
            v-model.trim="validator.form[input.id].$model"
            @input="validator.form[input.id].$touch()"
          />
        </form-group>

        <form-group
          v-if="input.type === 'file'"
          :name="input.id"
          :attribute="$_t(`attribute.${input.id}`)"
          :class="inline && 'form-generator__group--inline'"
        >
          <div class="d-flex justify-center align-center">
            <label>
              <v-file-input
                hide-input
                style="display: none"
                class="mt-8"
                truncate-length="18"
                :menu-props="{ 'offset-y': true, 'nudge-top': -1 }"
                :type="input.type"
                v-model="validator.form[input.id].$model"
              ></v-file-input>
              <v-icon
                class="text-green"
                style="font-size: 30px; cursor: pointer"
                >mdi-file-image</v-icon
              >
            </label>
          </div>
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
  name: "FormGenerator",
  data() {
    return {
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
    // menu: {
    //   type: Boolean,
    //   default: true,
    // },
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
