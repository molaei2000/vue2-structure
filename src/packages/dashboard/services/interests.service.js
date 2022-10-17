import {
  fetchCoursesListAxiosReq,
  fetchInterestInfoAxiosRequest,
  fetchRegionalInterestAxiosRequest,
} from "@/packages/dashboard/api";
import message from "@/tools/Message";

export default class InterestsService {
  async fetchCourses(fields = ["*"], filter = null) {
    try {
      const data = await fetchCoursesListAxiosReq(fields, filter);
      return data;
    } catch (e) {
      console.log(e);
      message.error(e.response.data.errors[0].message);
    }
  }

  //fetch region
  async fetchRegion(fields = ["*"], filter = null, limit = null) {
    try {
      return await fetchRegionAxiosReq(fields, filter, limit);
    } catch (e) {
      console.log(e);
    }
  }

  async fetchInterestInfo(
    region = null,
    work_region = null,
    course_title = null
  ) {
    try {
      return await fetchInterestInfoAxiosRequest(
        region,
        work_region,
        course_title
      );
    } catch (e) {
      console.log(e);
    }
  }
  async fetchRegional(courseTitle = null) {
    try {
      return await fetchRegionalInterestAxiosRequest(courseTitle);
    } catch (e) {
      console.log(e);
    }
  }
}
