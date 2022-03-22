import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StudentsApi from "../../services/students/getStudents";
import axios from "axios";
export const getStudents = createAsyncThunk("getStudentsReducer", async () => {
  try {
    const res = await StudentsApi.getstudents("");
    // console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const addStudents = createAsyncThunk("addStudent", async (student) => {
  try {
    const res = await axios.post(`http://localhost:3001/students`, student);
    // console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
});
export const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {
  try {
    const res = await StudentsApi.deleteStudent(id);
    console.log(res);
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
  },
  reducers: {
    resetStatus_add: (state) => {
      state.status_add = "idle";
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
      // console.log(action);
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
  console.log(state.getStudents.status_add);
  return state.getStudents.status_add;
};
export const selectStatus_delete = (state) => {
  return state.getStudents.status_delete;
};
export default getStudentsReducer;
