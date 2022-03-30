import httpService from "../httpService";
import url from "../urls";

const StudentsApi = {
  getstudents: (params) => {
    const uri = url.getStudents + params;
    console.log(uri);
    return httpService.GET(uri, null, null);
  },
  deleteStudent: (params) => {
    const uri = url.getStudents + "/";

    return httpService.DELETE(uri, null, params);
  },
  addStudent: (params) => {
    const uri = url.getStudents + "/";
    console.log(uri);
    console.log(params.name);
    return httpService.POST(uri, null, params);
  },
  editStudent: (id, data) => {
    const uri = url.getStudents + "/" + id;
    console.log(uri);
    // console.log(params.name);
    return httpService.PUT(uri, null, data);
  },
  getstudentById: (params) => {
    const uri = url.getStudents + "/" + params;
    console.log(uri);
    return httpService.GET(uri, null, null);
  },
  searchstudentByName: (params) => {
    const uri = url.getStudents + "?name_like=" + params + "&_expand=class";
    console.log(uri);
    return httpService.GET(uri, null, null);
  },
};
export default StudentsApi;
