import store from "@/store/index";
import router from "@/router";

import message from "@/tools/Message";
import {
  getCafeExpirationAxiosRequest,
  getUserMeAxiosRequest,
  loginAxiosRequest,
  logoutAxiosRequest,
  refreshTokenAxiosRequest,
  resetPasswordAxiosReq,
  changePassAxiosReq,
} from "@/packages/authenticate/api";

export default class AuthenticationServices {
  /*
   * Login
   * -----------------------
   * @param payload {Object}
   * -----------------------
   * Description
   * -----------------------
   * Make api call to login
   * -----------------------
   * return promise
   * */
  async login(payload) {
    try {
      /* call api to create model */
      let response = await loginAxiosRequest(payload);

      // console.log(response);
      await store.dispatch("authentication/saveToken", response.access_token);
      await store.dispatch(
        "authentication/saveRefreshToken",
        response.refresh_token
      );
      await store.dispatch("authentication/saveExpiration", response.expires);
      // message.success("LOGIN_SUCCESS");
      return response;
    } catch (err) {
      console.log(err);
      // message.error(err.response.data.errors[0].message);
    }
  }

  /*
   * logout
   * -----------------------
   * @param payload {Object}
   * -----------------------
   * Description
   * -----------------------
   * Make api call to logout
   * -----------------------
   * return promise
   * */
  async logout(payload) {
    try {
      /* call api to logout */
      await logoutAxiosRequest(payload);

      await store.dispatch("authentication/logout");
      await router.push({ name: "auth.login" });
    } catch (err) {
      message.error(err.response.data.errors[0].message);
    }
  }

  /*
   * refresh token
   * -----------------------
   * @param payload {Object}
   * -----------------------
   * Description
   * -----------------------
   * Make api call refresh token
   * -----------------------
   * return promise
   * */
  async refreshToken(payload) {
    try {
      /* call api to refresh token */
      return await refreshTokenAxiosRequest(payload);
    } catch (err) {
      message.error(err.response.data.errors[0].message);
    }
  }

  /*
   * get current user info
   * -----------------------
   * @param query_params {Object}
   * -----------------------
   * Description
   * -----------------------
   * Make api call to get current user info
   * -----------------------
   * return promise
   * */
  async getUser(query_params) {
    try {
      /* call api to create model */
      let response = await getUserMeAxiosRequest(query_params);
      await store.dispatch("authentication/setUserInfo", response);
      return response;
    } catch (err) {
      console.log(err);
      message.error(err.response.data.errors[0].message);
    }
  }

  /*
   * get current user info
   * -----------------------
   * @param query_params {Object}
   * -----------------------
   * Description
   * -----------------------
   * Make api call to get current user info
   * -----------------------
   * return promise
   * */
  async getExpirationDate(cafe_user_id) {
    try {
      /* call api to create model */
      let response = await getCafeExpirationAxiosRequest(
        ["license_expiration_date"],
        {
          cafe_operator: {
            id: {
              _eq: cafe_user_id,
            },
          },
        }
      );
      await store.dispatch(
        "authentication/saveCafeLicenseExpiration",
        response
      );
      return response;
    } catch (err) {
      message.error(err.response.data.errors[0].message);
    }
  }

  async resetPass(email) {
    try {
      await resetPasswordAxiosReq(email);
      return true;
    } catch (err) {
      message.error(err.response.data.errors[0].message);
    }
  }
  async resetPassword(password, token) {
    try {
      await changePassAxiosReq(password, token);
      return true;
    } catch (err) {
      message.error(err.response.data.errors[0].message);
    }
  }
}
