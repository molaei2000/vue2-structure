import urls from "@/tools/Urls";
import api from "@/tools/Api";
/**
 *  get earliest upcoming
 *  ------------------------
 *  Api address| /items/event
 *  ------------------------
 *  Method| GET
 *  ------------------------
 *  @param fields {Array}
 *  @param filter {Object}
 *  @param sort
 *  @param limit {Number}
 *  ------------------------
 *  @return  type {Promise}
 *  ------------------------
 **/
export const fetchUpcomingAxiosRequest = function (
  fields = ["*"],
  filter = null,
  sort = null,
  limit = null
) {
  return api.get(urls.api("earliestUpcoming"), {
    params: { fields: [...fields], filter: filter, sort: sort, limit: limit },
  });
};
