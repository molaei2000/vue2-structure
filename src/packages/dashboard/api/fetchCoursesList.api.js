import api from "@/tools/Api";
import urls from "@/tools/Urls";

/*
 *  get course list
 *  ------------------------
 *  Api address | /items/course
 *  ------------------------
 *  @param filter {Object}
 *  @param fields {Object}
 *  ------------------------
 *  method : GET
 *  ------------------------
 *  Description :
 *  ------------------------
 *  get course list
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */
export const fetchCoursesListAxiosReq = function (fields = ["*"], filters = null) {
  return api.get(urls.api("items", ["course"]), {
    params: {
      filter: filters,
      fields: [...fields],
    },
  });
};
