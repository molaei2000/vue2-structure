import api from "@/tools/Api";
import urls from "@/tools/Urls";
import message from "@/tools/Message";
import store from "@/store";

export default {
  async login(payload) {
    try {
      const res = await api.post(urls.api("auth_login"), payload);
      await store.dispatch("authentication/saveToken", res.access_token);
      await store.dispatch("authentication/saveRefreshToken", res.access_token);
      await store.dispatch("authentication/saveExpiration", res.access_token);
      const user = await this.getUser();
      return { ...res, ...user };
    } catch ({ response }) {
      message.error(response.data.Message);
      console.log(response);
    }
  },
  async register(payload) {
    try {
      const res = await api.post(urls.api("auth_register"), payload);
      console.log(res, "register");
      return res;
    } catch (e) {
      console.log(e.response.data);
      message.error(e.response.data.Message);
      return e.response.data;
    }
  },
  async requestMobileVerify(payload) {
    try {
      const status = await api.post(urls.api("request_to_verify"), payload);
      console.log(status, "requestMobileVerify");
      return status;
    } catch (e) {
      console.log(e);
      message.error(e.response.data.Message);
      return e;
    }
  },
  async verifyCode(payload) {
    try {
      const status = await api.post(urls.api("verify_code"), payload);
      return status;
    } catch (e) {
      console.log(e);
      message.error(e.response.data.Message);
      return e;
    }
  },
  async getUser() {
    try {
      let { data } = await api.get(urls.api("user_me"));
      const isAdmin = await this.isAdmin();
      console.log(isAdmin, "is admin");
      data.isAdmin = isAdmin.data;
      await store.dispatch("authentication/setUserInfo", data);
      return data;
    } catch (e) {
      message.error(e.response.data.Message);
      console.log(e);
    }
  },
  async isAdmin() {
    try {
      return await api.get(urls.api("is_admin"));
    } catch (e) {
      console.log(e);
    }
  },
  async oneTimePass(payload) {
    try {
      return await api.post(urls.api("one_time_pass"), payload);
    } catch (e) {
      console.log(e);
      message.error(e.response.data.Message);
      return null;
    }
  },
};
