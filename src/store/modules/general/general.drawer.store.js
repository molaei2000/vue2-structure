// initial state
const state = () => ({
  drawer: false,
});

// getters
const getters = {
  drawer: (state) => state.drawer,
};

// mutations
const mutations = {
  setDrawer(state, value) {
    state.drawer = value;
  },
};

// actions
const actions = {
  changeDrawer({ commit }, value) {
    commit("setDrawer", value);
  },
};

export default {
  namespaced: true,
  name: "drawer",
  state,
  getters,
  actions,
  mutations,
};
