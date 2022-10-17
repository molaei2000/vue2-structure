// initial state
import storage from "@/tools/Storage";
const key = "pagination-";
const state = () => ({
  page: storage.get(key + "page") ? storage.get(key + "page") : 1,
  total: storage.get(key + "total") ? storage.get(key + "total") : 0,
});

// getters
const getters = {
  current_page: (state) => state.page,
  total_pages: (state) => state.total,
};

// mutations
const mutations = {
  setPage(state, value) {
    state.page = value;
    storage.set(key + "page", value);
  },
  setTotal(state, value) {
    state.total = value;
    storage.set(key + "total", value);
  },
};

// actions
const actions = {
  setCurrentPage({ commit }, data) {
    commit("setPage", data);
  },
  nextPage({ commit, state }) {
    if (state.total > state.page) commit("setPage", ++state.page);
  },
  previousPage({ commit, state }) {
    if (state.page > 0) commit("setPage", --state.page);
  },
  setTotalPages({ commit }, data) {
    commit("setTotal", Math.ceil(data));
  },
};

export default {
  namespaced: true,
  name: "pagination",
  state,
  getters,
  actions,
  mutations,
};
