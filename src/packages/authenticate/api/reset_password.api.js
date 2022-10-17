import api from "@/tools/Api";
import urls from "@/tools/Urls";
/*
 *  reset password
 *  ------------------------
 *  Api address | auth/password/request
 *  ------------------------
 *  @param payload {Object}
 *  ------------------------
 *  method : POST
 *  ------------------------
 *  Description :
 *  ------------------------
 *  reset password
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */
export const resetPasswordAxiosReq = function (email) {
  return api.post(urls.api("auth_reset_password"), email);
};
