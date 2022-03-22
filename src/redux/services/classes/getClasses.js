import httpService from "../httpService";
import url from "../urls";

const ClassesApi = {
  getClasses: (params) => {
    const uri = url.getClasses;
    return httpService.GET(uri, null, params);
  },
};
export default ClassesApi;
