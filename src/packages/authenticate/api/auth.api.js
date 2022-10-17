import api from "@/tools/Api";
import urls from "@/tools/Urls";

/**
 *  login
 *  ------------------------
 *  Api address| /auth/login
 *  ------------------------
 *  Method| POST
 *  ------------------------
 *  Description| login
 *  ------------------------
 *  @param payload {Object}
 *  ------------------------
 *  @return  type {Promise}
 *  ------------------------
 **/
export const loginAxiosRequest = function (payload) {
  return api.post(urls.api("auth_login"), payload);
};

/**
 *  logout
 *  ------------------------
 *  Api address| /auth/logout
 *  ------------------------
 *  Method| POST
 *  ------------------------
 *  Description| logout
 *  ------------------------
 *  @param payload {Object}
 *  ------------------------
 *  @return  type {Promise}
 *  ------------------------
 **/
export const logoutAxiosRequest = function (payload) {
  return api.post(urls.api("auth_logout"), payload);
};
