// initial state

const state = () => ({
  users: [],
  certs: [],
  cert: {},
  all: {},
});

// getters
const getters = {
  get_certs: (state) => state.certs,
  get_cert: (state) => state.cert,
  get_users: (state) => state.users,
  get_all: (state) => state.all,
};

// mutations
const mutations = {
  updateCerts(state, payload) {
    state.certs = payload;
  },
  updateCert(state, payload) {
    state.cert = payload;
  },
  updateUsers(state, payload) {
    state.users = payload;
  },
  updateAll(state, payload) {
    state.all = payload;
  },
};

// actions
const actions = {
  setCerts({ commit }, payload) {
    commit("updateCerts", payload);
  },
  setCert({ commit }, payload) {
    commit("updateCert", payload);
  },
  setUsers({ commit }, payload) {
    commit("updateUsers", payload);
  },
  setAll({ commit }, payload) {
    commit("updateAll", payload);
  },
};

export default {
  namespaced: true,
  name: "admin",
  state,
  getters,
  actions,
  mutations,
};
