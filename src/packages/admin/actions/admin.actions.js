import api from "@/tools/Api";
import urls from "@/tools/Urls";
import store from "@/store";
import message from "@/tools/Message";
// import message from "@/tools/Message";

export default {
  async getAdminCerts(schema = {}) {
    try {
      const { data } = await api.post(urls.api("admin_get_certs"), schema);
      console.log(data, "get admin certs");
      await store.dispatch("admin/setCerts", data.data);
      await store.dispatch("pagination/setItemsLength", data.totalCount);
      return data;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  async getUsers(schema = {}) {
    try {
      const { data } = await api.post(urls.api("admin_users"), schema);
      console.log(data, "users");
      await store.dispatch("admin/setUsers", data.data);
      await store.dispatch("pagination/setItemsLength", data.totalCount);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async addPayAmount(payload) {
    try {
      const data = await api.post(
        urls.api("admin_add_pay_amount_cert"),
        payload
      );
      return data;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  async changeState(payload) {
    try {
      const data = await api.post(
        urls.api("admin_status_cert_change"),
        payload
      );
      return data;
    } catch (e) {
      console.log(e);
      message.error(e.reponse.data.Message);
      return e;
    }
  },
  async addSubmissionData(payload) {
    try {
      const data = await api.post(
        urls.api("admin_add_submission_data"),
        payload
      );
      return data;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  async changeIsPay(payload) {
    try {
      const data = await api.post(urls.api("admin_change_is_pay"), payload);
      return data;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  async addCertificateData(payload) {
    try {
      const res = await api.post(urls.api("add_cert_data"), payload);
      console.log(res, "add certificate data");
      return res;
    } catch (e) {
      console.log(e);
      message.error(e.response.data.Message);
    }
  },
  async getAllPay() {
    return await api.post(urls.api("total_pays"));
  },
  async getAll() {
    try {
      let res = {};
      const totalPays = await this.getAllPay();
      const certs = await this.getAdminCerts({
        order: [
          {
            column: "createMoment",
            descending: true,
          },
        ],
      });
      const users = await this.getUsers({});
      res.certs = certs.totalCount;
      res.users = users.totalCount;
      res.totalPays = totalPays.data;
      await store.dispatch("admin/setAll", res);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
