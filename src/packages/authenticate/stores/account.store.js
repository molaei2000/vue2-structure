// initial state
import api from "@/tools/Api";
import urls from "@/tools/Urls";

const state = () => ({});

// getters
const getters = {};

// mutations
const mutations = {};

// actions
const actions = {
  changePassword({ state }, params) {
    console.log(state);
    return new Promise((resolve, reject) => {
      /* Call login auth */
      api
        .post(urls.api("auth_change_password"), params)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  namespaced: true,
  name: "account",
  state,
  getters,
  actions,
  mutations,
};
