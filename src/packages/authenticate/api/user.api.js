import api from "@/tools/Api";
import urls from "@/tools/Urls";

/*
 *  get current user data
 *  ------------------------
 *  Api address | /user/me
 *  ------------------------
 *  @param query_params {Object}
 *  ------------------------
 *  method : GET
 *  ------------------------
 *  Description :
 *  ------------------------
 *  get current user data
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */

export const getUserMeAxiosRequest = function (query_params = null) {
  return api.get(urls.api("user_me"), {
    params: {
      fields: [...query_params],
    },
  });
};
