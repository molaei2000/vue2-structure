import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// Import all of the resource store files.
function loadStores() {
  const context = require.context("@/packages", true, /store.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}

function loadGeneralsStores() {
  const context = require.context("@/store/modules", true, /store.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}
const resourceModules = {};

loadGeneralsStores().forEach((resource) => {
  resourceModules[resource.name] = resource;
});
loadStores().forEach((resource) => {
  resourceModules[resource.name] = resource;
});

export default new Vuex.Store({
  modules: resourceModules,
  strict: debug,
});
