import urls from "@/tools/Urls";
import api from "@/tools/Api";
/**
 *  get statistics/interest
 *  ------------------------
 *  Api address| statistics/interest
 *  ------------------------
 *  Method| GET
 *  ------------------------
 *  @return  type {Promise}
 *  ------------------------
 **/
export const fetchRegionalInterestAxiosRequest = function (courseTitle = null) {
  return api.get(urls.api("regionalInterest"), {
    params: {
      courseTitle,
    },
  });
};
