import api from "@/tools/Api";
import urls from "@/tools/Urls";

/*
 *  refresh token
 *  ------------------------
 *  Api address | /auth/refresh
 *  ------------------------
 *  @param payload {Object}
 *  ------------------------
 *  method : POST
 *  ------------------------
 *  Description :
 *  ------------------------
 *  refresh token
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */
export const refreshTokenAxiosRequest = function (payload) {
  return api.post(urls.api("auth_refresh"), payload);
};
