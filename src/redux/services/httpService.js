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
      
      const res = await axios.delete(url + params);
    
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
