import store from "@/store";
import { _t } from "./Utils";

// Message
// display a quick message to user

const message = {
  error(text) {
    store.commit("messages/set", { text: _t(text), color: "error" });
  },

  success(text) {
    store.commit("messages/set", { text: _t(text), color: "success" });
  },

  show(text) {
    store.commit("messages/set", { text: _t(text), color: "default" });
  },
};

export default message;
