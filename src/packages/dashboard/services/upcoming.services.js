import { fetchUpcomingAxiosRequest } from "@/packages/dashboard/api";
import { _t } from "@/tools/Utils";
export default class upcomingService {
  async fetchUpcoming(
    fields = ["*"],
    filter = null,
    sort = null,
    limit = null
  ) {
    try {
      const response = await fetchUpcomingAxiosRequest(
        fields,
        filter,
        sort,
        limit
      );
      const upcomingList = [];
      response.forEach((item) => {
        const info = {
          title: item.course_id.title,
          start: item.start_date,
          second_day_start_time: item.second_day_start_time,
          place: item.region,
          registered: item.number_of_seats_reserved,
          chart: {
            series: [
              {
                name: _t("dashboard.components.chart.capacity"),
                data: [
                  item.doctors_seats < 0 ? 0 : item.doctors_seats,
                  item.physiotherapist_seats < 0
                    ? 0
                    : item.physiotherapist_seats,
                ],
              },
              {
                name: _t("dashboard.components.chart.registered"),
                data: [
                  item.doctors_seats_reserved < 0
                    ? 0
                    : item.doctors_seats_reserved,
                  item.physiotherapist_seats_reserved < 0
                    ? 0
                    : item.physiotherapist_seats_reserved,
                ],
              },
            ],
          },
        };
        upcomingList.push({ ...info });
      });
      return upcomingList;
    } catch (e) {
      console.log(e);
    }
  }
}
