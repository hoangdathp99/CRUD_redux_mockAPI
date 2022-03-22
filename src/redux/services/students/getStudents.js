import httpService from "../httpService";
import url from "../urls";

const StudentsApi = {
  getstudents: (params) => {
    const uri = url.getStudents;
    // console.log(uri);
    return httpService.GET(uri, null, null);
  },
  deleteStudent: (params) => {
    const uri = url.deleteStudent;

    return httpService.DELETE(uri, null, params);
  },
};
export default StudentsApi;
