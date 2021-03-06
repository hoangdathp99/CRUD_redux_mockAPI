import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ClassesApi from "../../services/classes/getClasses";

export const getClasses = createAsyncThunk("getClassesReducer", async () => {
  try {
    const res = await ClassesApi.getClasses("");
    ;
    return res.data;
  } catch (error) {
    return error;
  }
});
export const ClassesSlice = createSlice({
  name: "getDataReducer",
  initialState: {
    status: "idle",
    classes: [{ id: 0, name: "" }],
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getClasses.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getClasses.fulfilled, (state, action) => {
      state.classes = action.payload;
      state.status = "done";
      
    });
  },
});
export const getClassesReducer = ClassesSlice.reducer;
export const selectClasses = (state) => {
  
  return state.getClasses.classes;
};
export const selectStatusClass = (state) => {
  return state.getClasses.status;
};
export default getClassesReducer;
