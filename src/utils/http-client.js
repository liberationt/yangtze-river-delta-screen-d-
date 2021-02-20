import { ENV, Msg, Tools } from "./tools";
import axios from "axios";
import router from "../router";
import qs from "qs";

const CONTENT_TYPE = {
  json: "application/json;",
  form: "application/x-www-form-urlencoded;",
  html: "text/html;",
  file: "multipart/form-data"
};
const HEADERS = {
  lang: "Accept-Language"
};
const CONTENT_TYPE_KEY = "Content-Type";
const protocol = location.protocol;

export const API_URL = `${protocol}//${ENV.VUE_APP_BASE_API}/${VUE_APP_API_DOMAIN}`;

function checkResponse(response) {
  let contentType = response.headers["content-type"];
  if (response.status === 200) {
    if (contentType.indexOf(CONTENT_TYPE.html) !== -1) {
      return response.text;
    }

    if (contentType.indexOf(CONTENT_TYPE.json) !== -1) {
      let result = response.data
        ? response.data
        : JSON.parse(response.request.responseText);
      if (result.code !== "0") {
        Msg.alert("", result.msg, () => {
          // if (result.code === "000000000010") {
          //   Tools.setRedictUrl(`${window.location.href}#back`);
          //   router.push("/login");
          // }
        });
        return false;
      } else {
        return result.result;
      }
    }
  } else {
    Msg.alert(
      '123',
      `${response.status} ${response.statusText}`
    );
  }
}

axios.defaults.withCredentials = true;
axios.interceptors.response.use(checkResponse, error => {
  // Do something with response error
  if (error.message === "Network Error" && ENV.DEBUG) {
    Msg.alert('123', error);
  }
  return Promise.reject(error);
});

export class HttpClient {
  static call(
    url,
    {
      method = "get",
      headers = {},
      body = null,
      mask = true,
      postData = false,
      external = false
    } = {}
  ) {
    url = external ? url : API_URL + url;
    if (url.indexOf("?") === -1) {
      url += "?";
    } else {
      url += "&";
    }
    url += `_t=${new Date().getTime()}`;
    let params = {
      baseURL: API_URL,
      method: method,
      url: url,
      responseType: "json",
      headers: Object.assign(headers, {
        [HEADERS.lang]: Tools.getLang()
      })
    };

    if (method === "get") {
      params.params = body;
    } else {
      params.data = postData ? body : qs.stringify(body);
    }
    if (mask) {
      // loading();
      // Msg.loading();
      //   Tools.startLoading()
    }
    return axios(params).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        Msg.alert(
          '123',
          `${i18n.t("Msg.systemError")}:${error.response.status}`
        );
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
        Msg.alert(i18n.t("Msg.titleError"), `${i18n.t("Msg.systemError")}`);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
        Msg.alert(
          i18n.t("Msg.titleError"),
          `${i18n.t("Msg.systemError")}:${error.message}`
        );
      }
      // console.log(error.config)
    });
  }

  static get(url, { mask = true, external = false, headers = {} } = {}) {
    return HttpClient.call(url, {
      headers,
      external,
      mask
    });
  }

  static post(
    url,
    {
      body = {},
      method = "post",
      mask = true,
      postData = false,
      external = true,
      headers = {}
    } = {}
  ) {
    return HttpClient.call(url, {
      method,
      headers: Object.assign(headers, {
        [CONTENT_TYPE_KEY]: CONTENT_TYPE.form
      }),
      body,
      external,
      postData,
      mask
    });
  }

  static put(
    url,
    {
      body = {},
      mask = true,
      postData = false,
      external = false,
      headers = {}
    } = {}
  ) {
    return HttpClient.post(url, {
      body,
      method: "put",
      postData,
      external,
      mask,
      headers
    });
  }

  static destroy(
    url,
    {
      body = {},
      mask = true,
      postData = false,
      external = false,
      headers = {}
    } = {}
  ) {
    return HttpClient.post(url, {
      body,
      method: "delete",
      postData,
      external,
      mask,
      headers
    });
  }

  static upload(
    url,
    {
      body = {},
      mask = true,
      postData = true,
      external = false,
      headers = {}
    } = {}
  ) {
    return HttpClient.call(url, {
      body,
      method: "post",
      headers: Object.assign(headers, {
        [CONTENT_TYPE_KEY]: CONTENT_TYPE.file
      }),
      postData,
      external,
      mask
    });
  }

  static postBody(
    url,
    {
      body = {},
      method = "post",
      mask = true,
      postData = true,
      external = false,
      headers = {}
    }
  ) {
    return HttpClient.call(url, {
      method,
      headers: Object.assign(headers, {
        [CONTENT_TYPE_KEY]: CONTENT_TYPE.json
      }),
      body,
      postData,
      external,
      mask
    });
  }
}
