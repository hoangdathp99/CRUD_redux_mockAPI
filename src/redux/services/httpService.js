import axios, { AxiosError } from "axios";
const CLIENT_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || "";

const httpService = {
  GET: async (uri, token, params) => {
    let url = CLIENT_BASE_URL + uri;
    let headers = {};
    if (token === "" || token === null) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    try {
      const res = await axios.get(url, {
        headers,
        params,
      });
      // console.log(res);
      return res;
    } catch (error) {
      const err = error;
      if (err.response) {
        const responseError = err.response.data;
        throw responseError;
      }
      const responseError = {
        status: 400,
        data: {},
        exception: {
          detail: "Something wrong",
        },
        message: "",
      };
      throw responseError;
    }
  },
  POST: async (uri, token, params) => {
    let url = CLIENT_BASE_URL + uri;
    console.log(url);
    let headers = {};
    if (token === "" || token === null) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    try {
      const res = await axios.post(url, params);
      return res;
    } catch (error) {
      const err = error;
      if (err.response) {
        const responseError = err.response.data;
        throw responseError;
      }
      const responseError = {
        status: 400,
        data: {},
        exception: {
          detail: "Something wrong",
        },
        message: "",
      };
      throw responseError;
    }
  },
  DELETE: async (uri, token, params) => {
    let url = CLIENT_BASE_URL + uri;
    let headers = {};
    if (token === "" || token === null) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    try {
      // const a = await new Promise(setTimeout(() => {}, 3000));
      const res = await axios.delete(url + params);
      // console.log(res);
      return res;
    } catch (error) {
      const err = error;
      if (err.response) {
        const responseError = err.response.data;
        throw responseError;
      }
      const responseError = {
        status: 400,
        data: {},
        exception: {
          detail: "Something wrong",
        },
        message: "",
      };
      throw responseError;
    }
  },
  PUT: async (uri, token, data) => {
    let url = CLIENT_BASE_URL + uri;
    console.log(url);
    let headers = {};
    if (token === "" || token === null) {
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    try {
      const res = await axios.put(url, data);
      console.log(res);
      return res;
    } catch (error) {
      const err = error;
      if (err.response) {
        const responseError = err.response.data;
        throw responseError;
      }
      const responseError = {
        status: 400,
        data: {},
        exception: {
          detail: "Something wrong",
        },
        message: "",
      };
      throw responseError;
    }
  },
};
export default httpService;
