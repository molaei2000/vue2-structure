// initial state

const state = () => ({
  is_loading: false,
});

// getters
const getters = {
  is_loading: (state) => state.is_loading,
};

// mutations
const mutations = {
  setLoading(state, value) {
    state.is_loading = value;
  },
};

// actions
const actions = {
  start({ commit }) {
    commit("setLoading", true);
  },
  finish({ commit }) {
    commit("setLoading", false);
  },
};

export default {
  namespaced: true,
  name: "loading",
  state,
  getters,
  actions,
  mutations,
};
