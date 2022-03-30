import httpService from "../httpService";
import url from "../urls";

const StudentsApi = {
  getstudents: (params) => {
    const uri = url.getStudents + params;

    return httpService.GET(uri, null, null);
  },
  deleteStudent: (params) => {
    const uri = url.getStudents + "/";

    return httpService.DELETE(uri, null, params);
  },
  addStudent: (params) => {
    const uri = url.getStudents + "/";

    return httpService.POST(uri, null, params);
  },
  editStudent: (id, data) => {
    const uri = url.getStudents + "/" + id;

    return httpService.PUT(uri, null, data);
  },
  getstudentById: (params) => {
    const uri = url.getStudents + "/" + params;

    return httpService.GET(uri, null, null);
  },
  searchstudentByName: (params) => {
    const uri = url.getStudents + "?name_like=" + params + "&_expand=class";

    return httpService.GET(uri, null, null);
  },
};
export default StudentsApi;
