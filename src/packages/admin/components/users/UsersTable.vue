<template>
  <div>
    <v-row class="justify-space-between">
      <v-col cols="6">
        <TopTitle :title="$_t('admin.components.user_table.users')" />
      </v-col>
      <v-col cols="1">
        <v-select
          flat
          solo
          class="elevation-0"
          dense
          background-color="inputColor"
          :items="[
            { text: 'All', value: 'all' },
            { text: 'Student', value: 'student' },
          ]"
          v-model="userType"
          item-text="text"
          item-value="value"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <MainTable :headers="headers" :items="items" :page-info="pageInfo">
          <template v-slot:fullName="{ item }">
            <v-avatar
              size="35"
              class="mr-2"
              :color="`#${Math.floor(Math.random() * 16777215).toString(16)}`"
            >
              <span class="white--text text-capitalize">
                {{ Array.from(item.fullName)[0] }}
              </span>
            </v-avatar>
            <span>{{ item.fullName }}</span>
          </template>
          <template v-slot:permissions="{ item }">
            <span
              v-for="text in item.permissions"
              :key="text"
              :style="`color:${generateColor(text)}`"
              >{{ text }}</span
            >
          </template>
          <template v-slot:actions="{ item }">
            <div class="d-flex justify-end">
              <v-btn
                outlined
                @click="showDetail(item)"
                color="primary"
                class="px-7"
                >{{ $_t("admin.components.main_table.details") }}</v-btn
              >

              <v-btn text color="red" class="ml-3">
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </div>
          </template>

          <template v-slot:pagination>
            <v-pagination
              v-model="pageInfo.page"
              :length="pageInfo.pageCount"
            ></v-pagination>
          </template>
        </MainTable>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopTitle from "../TopTitle";
import { ref, reactive } from "vue";
import { USER_TABLE_HEADER_SCHEMA } from "@/packages/admin/schema/USER_TABLE_HEADER_SCHEMA";
import MainTable from "@/packages/admin/components/MainTable";
export default {
  name: "UsersTable",
  components: { MainTable, TopTitle },
  setup(props) {
    const userType = ref("all");
    const headers = USER_TABLE_HEADER_SCHEMA;
    const pageInfo = reactive({
      page: 1,
      pageCount: 5,
      itemsPerPage: props.itemsPerPage || 10,
    });
    const items = ref([
      {
        fullName: "mohammad mahdi",
        nickName: "string",
        userName: "string",
        permissions: ["admin"],
      },
      {
        fullName: "ehsan",
        nickName: "string",
        userName: "string",
        permissions: ["student"],
      },
      {
        fullName: "mobin",
        nickName: "string",
        userName: "string",
        permissions: ["teacher"],
      },
    ]);
    return { userType, headers, items, pageInfo };
  },
  methods: {
    showDetail(item) {
      console.log(item);
    },
    generateColor(text) {
      if (text === "student") return "#AE2CA1";
      if (text === "admin") return "#2C1AFF";
      if (text === "teacher") return "#38BF76";
    },
  },
};
</script>

<style scoped></style>
