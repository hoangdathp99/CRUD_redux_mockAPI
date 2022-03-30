import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StudentsApi from "../../services/students/getStudents";
export const getStudents = createAsyncThunk(
  "getStudentsReducer",
  async (params) => {
    try {
      const res = await StudentsApi.getstudents(params);
      
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const getStudentById = createAsyncThunk("getStudentById", async (id) => {
  try {
    const res = await StudentsApi.getstudentById(id);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const searcStudentsByName = createAsyncThunk(
  "searchStudentByName",
  async (name) => {
    try {
      const res = await StudentsApi.searchstudentByName(name);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const addStudents = createAsyncThunk("addStudent", async (student) => {
  try {
   
    const res = await StudentsApi.addStudent(student);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const editStudent = createAsyncThunk("editStudent", async (student) => {
  try {
    const res = await StudentsApi.editStudent(student.id, student);
    return res.data;
  } catch (error) {
    return error;
  }

  
});
export const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {
  try {
    const res = await StudentsApi.deleteStudent(id);
   
    return res.data;
  } catch (error) {
    return error;
  }
});
export const StudentSlice = createSlice({
  name: "getDataReducer",
  initialState: {
    status: "idle",
    status_add: "idle",
    status_delete: "idle",
    status_edit: "idle",
    student: [
      {
        id: 0,
        name: "",
        dob: "",
        address: "",
        gender: "",
        classid: 0,
        class: {
          id: 1,
          name: "",
        },
      },
    ],
    studentById: {
      id: 0,
      name: "",
      dob: "",
      address: "",
      gender: "",
      classid: 0,
      class: {
        id: 1,
        name: "",
      },
    },
  },
  reducers: {
    resetStatus_add: (state) => {
      state.status_add = "idle";
      state.status_edit = "idle";
      // state.status_delete = "idle"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudents.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.student = action.payload;
      state.status = "done";
      
    });
    builder.addCase(searcStudentsByName.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(searcStudentsByName.fulfilled, (state, action) => {
      state.student = action.payload;
      state.status = "done";
     
    });
    builder.addCase(addStudents.pending, (state) => {
      state.status_add = "loading";
    });
    builder.addCase(addStudents.fulfilled, (state) => {
      state.status_add = "done";
      // state.student += user;
    });
    builder.addCase(deleteStudent.pending, (state) => {
      state.status_delete = "loading";
    });
    builder.addCase(deleteStudent.fulfilled, (state) => {
      state.status_delete = "done";
    });
    builder.addCase(getStudentById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getStudentById.fulfilled, (state, action) => {
      state.status = "done";
      state.studentById = action.payload;
    });
    builder.addCase(editStudent.pending, (state) => {
      state.status_edit = "loading";
    });
    builder.addCase(editStudent.fulfilled, (state) => {
      state.status_edit = "done";
      // state.studentById = action.payload;
    });
  },
});
export const getStudentsReducer = StudentSlice.reducer;
export const { resetStatus_add } = StudentSlice.actions;
export const selectStudents = (state) => {
  return state.getStudents.student;
};
export const selectStatus = (state) => {
  return state.getStudents.status;
};
export const selectStatus_add = (state) => {
  
  return state.getStudents.status_add;
};
export const selectStatus_delete = (state) => {
  return state.getStudents.status_delete;
};
export const selectStatus_edit = (state) => {
  return state.getStudents.status_edit;
};
export const selectStudentById = (state) => {
  return state.getStudents.studentById;
};
export default getStudentsReducer;
