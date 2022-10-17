import axios from "axios";
import handler from "./Handler";
import auth from "./Auth";
import lang from "./Lang";
import store from "@/store/index";

const api = axios.create();

// add token to header
api.interceptors.request.use(
  async (request) => {
    await store.dispatch("loading/start");
    if (lang.locale()) request.headers["Accept-Language"] = lang.locale();

    //Auth token if token exist,set it on header request
    let token = auth.getToken();
    if (token) request.headers["Authorization"] = `Bearer ${token}`;
    return request;
  },
  async (error) => {
    await store.dispatch("loading/finish");
    return Promise.reject(error);
  }
);

// response and error handler
api.interceptors.response.use(
  async (response) => {
    await store.dispatch("loading/finish");
    return handler.response(response);
  },
  async (error) => {
    await store.dispatch("loading/finish");
    return handler.error(error);
  }
);

export default api;
