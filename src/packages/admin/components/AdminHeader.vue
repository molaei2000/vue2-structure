<template>
  <div class="pt-8">
    <v-row>
      <v-col class="d-flex flex-column">
        <v-toolbar-title class="font-weight-bold text-h4"
          >Good morning , Lisa</v-toolbar-title
        >
        <v-toolbar-title class="text--disabled">{{
          $_date(new Date())
        }}</v-toolbar-title>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2">
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
            <v-list-item-title class="text--disabled">Admin</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
};
</script>

<style scoped></style>
