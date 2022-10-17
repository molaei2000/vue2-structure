// initial state

const state = () => ({
  dialog: false,
});

// getters
const getters = {
  dialog: (state) => state.dialog,
};

// mutations
const mutations = {
  setDialog(state, value) {
    state.dialog = value;
  },
};

// actions
const actions = {
  openDialog({ commit }) {
    commit("setDialog", true);
  },
  closeDialog({ commit }) {
    commit("setDialog", false);
  },
};

export default {
  namespaced: true,
  name: "dialog",
  state,
  getters,
  actions,
  mutations,
};
