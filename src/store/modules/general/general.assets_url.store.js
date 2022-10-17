// initial state

const state = () => ({
  assets_url: process.env.VUE_APP_BASE_URL + "assets/",
});

// getters
const getters = {
  assets_url: (state) => state.assets_url,
};

// mutations
const mutations = {};

// actions
const actions = {};

export default {
  namespaced: true,
  name: "assets_url",
  state,
  getters,
  actions,
  mutations,
};
