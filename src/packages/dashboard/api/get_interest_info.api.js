import urls from "@/tools/Urls";
import api from "@/tools/Api";
/**
 *  get course statistic
 *  ------------------------
 *  Api address| /statistics/course
 *  ------------------------
 *  Method| GET
 *  ------------------------
 *  @return  type {Promise}
 *  ------------------------
 **/
export const fetchInterestInfoAxiosRequest = function (
  region = null,
  work_region = null,
  course_title = null
) {
  return api.get(urls.api("interestInfo"), {
    params: {
      region,
      work_region,
      course_title,
    },
  });
};
