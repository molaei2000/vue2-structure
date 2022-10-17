<template>
  <nav aria-label="breadcrumb" class="nav-left">
    <ol class="breadcrumb">
      <!--Start Breadcrumb item  ---------------------------------->
      <router-link
        class="text-decoration-none"
        v-for="(route, index) in items"
        :key="'route-' + index"
        :to="
          user.role.name === 'teacher'
            ? '/panel/course-events'
            : { name: `${route.name}` }
        "
      >
        <li
          :class="
            isCurrentRoute(route.name)
              ? 'text-secondary'
              : 'text-dark font-weight-bold'
          "
          class="link-hover text-body-2"
        >
          {{ route.meta.title }}
          <span v-if="isCurrentRoute(route.name)">/</span>
        </li>
      </router-link>
      <!--End   Breadcrumb item  ---------------------------------->
    </ol>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Breadcrumb",
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({
      user: "authentication/user",
    }),
  },
  methods: {
    isCurrentRoute(route) {
      return this.$route.name !== route;
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  ol {
    margin: 0px !important;
  }
  li {
    display: inline;
  }
  margin: 0px !important;
  background-color: #ffffff !important;
}

.link-hover:hover {
  color: #81c784 !important;
}
.nav-left {
  position: absolute;
  top: 21px;
  left: 54px;
}
</style>
