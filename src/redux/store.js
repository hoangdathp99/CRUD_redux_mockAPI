import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import getClassesReducer from "./slice/getClasses/getClasses";
// import getdataReducer from "./slice/getDataSlice";
import getStudentsReducer from "./slice/getStudents/getStudents";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // getdata: getdataReducer,
    getStudents: getStudentsReducer,
    getClasses: getClassesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
