// Handler
// handle server or connection errors

import urls from "./Urls";
import { clearAuth } from "./Auth";

const handler = {
  // handle errors
  error(result) {
    try {
      let error = new ServerError(result.response);
      if (error.code === 401) clearAuth();
      console.log(error.messages[0]?.extensions); // FORBIDDEN
      if (
        error.code === 403 &&
        error.messages[0]?.extensions?.code === "INVALID_TOKEN"
      )
        clearAuth();
      return Promise.reject(result);
    } catch (e) {
      return Promise.reject(result);
    }
  },

  // handle response
  response(result) {
    try {
      let request_url = result.config.url;
      if (request_url.includes(urls.url("base_url"))) {
        if (result.data.meta) return result.data;
        else if (result.data.data) return result.data.data;
        else return result;
      }
      return Promise.reject(result);
    } catch (e) {
      return Promise.reject(result);
    }
  },
};

class ServerError {
  code;
  status;
  statusText;
  messages;
  constructor(error) {
    try {
      this.code = error.status;
      this.status = error.status;
      this.messages = error.data.errors;
      this.statusText = error.statusText;
    } catch (e) {
      this.code = null;
    }
  }
}

export default handler;
