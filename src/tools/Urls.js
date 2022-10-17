import util from "util";

// Urls Class
// this class handle all urls and api address
const loadUrls = function () {
  const context = require.context("@/packages", true, /urls.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
};

const list = {
  base_url:
    process.env.VUE_APP_BASE_URL,
};

//Add urls to list
loadUrls().forEach((url) => {
  Object.assign(list, list, url);
});

const urls = {
  apiParamsSupperKey: "@api_params:",

  // Get api
  api(key, parameters = null) {
    if (!Array.isArray(parameters)) parameters = [];
    let url = list[key];
    if (parameters.length !== 0) url = joinParametersToString(url, parameters);
    return list["base_url"] + url;
  },

  // Add server base url to a url
  server(url) {
    return list["base_url"] + url;
  },

  // Get web with current host name
  local(key) {
    return this.current() + this.web(key);
  },

  // Get current web url with protocol
  current() {
    return window.location.protocol + "//" + window.location.hostname;
  },

  // Get url with key
  url(key = "base_url") {
    return list[key];
  },
};

// Join parameters to string
function joinParametersToString(string, p) {
  const params = p;
  if (params === undefined || params === []) return string;
  if (!string.includes("%s")) return string;
  params.unshift(string);
  return util.format.apply(util, params);
}

export default urls;
