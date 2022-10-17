// initial state

const state = () => ({
  data: {},
});

// getters
const getters = {
  data: (state) => state.data,
};

// mutations
const mutations = {
  set(state, data) {
    state.data = data;
  },
};

// actions
const actions = {};

export default {
  namespaced: true,
  name: "messages",
  state,
  getters,
  actions,
  mutations,
};
