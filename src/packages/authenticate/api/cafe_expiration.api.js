import api from "@/tools/Api";
import urls from "@/tools/Urls";

/*
 *  get cafe expiration date
 *  ------------------------
 *  Api address | /items/cafe
 *  ------------------------
 *  @param query_params {Object}
 *  @param filters {Object}
 *  ------------------------
 *  method : GET
 *  ------------------------
 *  Description :
 *  ------------------------
 *  get cafe expiration date
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */

export const getCafeExpirationAxiosRequest = function (
  query_params = null,
  filters = null
) {
  return api.get(urls.api("items", ["cafe"]), {
    params: {
      fields: [...query_params],
      filter: filters,
    },
  });
};
