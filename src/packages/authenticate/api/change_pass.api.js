import api from "@/tools/Api";
import urls from "@/tools/Urls";
/*
 *  change password
 *  ------------------------
 *  Api address | auth/password/request
 *  ------------------------
 *  @param payload {Object}
 *  ------------------------
 *  method : POST
 *  ------------------------
 *  Description :
 *  ------------------------
 *  change password
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */
export const changePassAxiosReq = function (password, token) {
  let data = {
    password: password,
    token: token.token,
  };
  return api.post(urls.api("auth_change_password"), data);
};
