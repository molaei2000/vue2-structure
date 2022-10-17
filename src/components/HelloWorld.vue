<template>
  <v-row>
    <v-col
      cols="12"
      lg="6"
      v-for="input in schema"
      :key="'key' + input.id"
      class="align-baseline"
    >
      <v-row>
        <v-col cols="4">
          <label :for="input.id" class="pl-8 font-weight-medium text-h6">
            {{
              $_t(`user_management.components.dialog.add_user.${input.name}`)
            }}
          </label>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-if="input.type !== 'select'"
            :id="input.id"
            v-model="form[input.id]"
            :type="input.type"
            dense
            outlined
            color="primary"
            class="rounded ml-8 mr-13"
            required
          ></v-text-field>
          <v-select
            v-else
            :id="input.id"
            outlined
            dense
            color="primary"
            class="rounded ml-8 mr-13"
            :items="rolesList"
            :item-text="['name']"
            :item-value="(item) => ({ id: item.id, name: item.name })"
            v-model="form[input.id]"
          ></v-select>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
