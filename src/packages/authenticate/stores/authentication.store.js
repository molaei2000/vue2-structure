// initial state
import auth from "@/tools/Auth";

const state = () => ({
  cafe_license_expiration: auth.getCafeLicenseExpiration(),
  user: auth.getUserInfo(),
  token: auth.getToken(),
  refresh_token: auth.getRefreshToken(),
  expiration: auth.getExpiration(),
  check: auth.check(),
});

// getters
const getters = {
  user: (state) => state.user,
  check: (state) => state.check,
  token: (state) => state.token,
  refresh_token: (state) => state.refresh_token,
  expiration: (state) => state.expiration,
  cafe_license_expiration: (state) => state.cafe_license_expiration,
  avatar: (state) =>
    state.user.avatar !== ""
      ? state.user.avatar + `?access_token=${state.token}`
      : null,
};

// mutations
const mutations = {
  setUser(state, value) {
    state.user = value;
    /* Update local storage*/
    auth.setUserInfo(value);
  },
  updateUser(state, value) {
    /* Update State*/
    state.user = Object.assign(state.user, value);

    /* Update local storage*/
    auth.setUserInfo(value);
  },
  updatePersonalInfo(state, value) {
    state.user.first_name = value.first_name;
    state.user.last_name = value.last_name;
    state.user.title = value.title;
    /* Update local storage*/
    auth.setUserInfo(state.user);
  },
  updateAvatar(state, value) {
    state.user.imageUrl = value;
    auth.setUserInfo(state.user);
  },

  setToken(state, value) {
    state.token = value;
    auth.saveToken(value);
  },
  setRefreshToken(state, value) {
    state.refresh_token = value;
    auth.saveRefreshToken(value);
  },

  setExpiration(state, value) {
    state.expiration = value;
    auth.saveExpiration(value);
  },
  setCafeLicenseExpiration(state, value) {
    state.cafe_license_expiration = value;
    auth.saveCafeLicenseExpiration(value);
  },

  clearAuth(state) {
    auth.removeToken();
    state.user = auth.getUserInfo();
    state.token = auth.getToken();
    state.check = auth.check();
  },
};

// actions
const actions = {
  setUserInfo({ commit }, data) {
    commit("setUser", data);
  },
  updateUserInfo({ commit }, data) {
    commit("updateUser", data);
  },
  updateUserPersonalInfo({ commit }, data) {
    commit("updatePersonalInfo", data);
  },
  updateAvatarAction({ commit }, data) {
    commit("updateAvatar", data);
  },
  saveToken({ commit }, data) {
    commit("setToken", data);
  },
  saveRefreshToken({ commit }, data) {
    commit("setRefreshToken", data);
  },
  saveExpiration({ commit }, data) {
    commit("setExpiration", data);
  },

  saveCafeLicenseExpiration({ commit }, data) {
    commit("setCafeLicenseExpiration", data);
  },
  clear({ commit }) {
    commit("clearAuth");
  },

  logout({ commit }) {
    commit("clearAuth");
  },
};

export default {
  namespaced: true,
  name: "authentication",
  state,
  getters,
  actions,
  mutations,
};
