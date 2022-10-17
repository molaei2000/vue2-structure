// initial state
import storage from "@/tools/Storage";
const step_super_key = "order.wizard_step";

const state = () => ({
  wizard_step:
    storage.get(step_super_key) !== null ? storage.get(step_super_key) : 1,
});

// getters
const getters = {
  step: (state) => state.wizard_step,
};

// mutations
const mutations = {
  setWizardStep(state, value) {
    state.wizard_step = value;
    storage.set(step_super_key, value);
  },
  clear(state) {
    state.wizard_step = 1;
    storage.remove(step_super_key);
  },
};

// actions
const actions = {
  setStep({ commit }, data) {
    commit("setWizardStep", data);
  },
  nextStep({ commit, state }) {
    commit("setWizardStep", ++state.wizard_step);
  },
  previousStep({ commit, state }) {
    commit("setWizardStep", --state.wizard_step);
  },
  clearStep({ commit }) {
    commit("clear");
  },
};

export default {
  namespaced: true,
  name: "wizard_step",
  state,
  getters,
  actions,
  mutations,
};
