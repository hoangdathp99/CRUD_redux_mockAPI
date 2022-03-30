import { configureStore } from "@reduxjs/toolkit";
import getClassesReducer from "./slice/getClasses/getClasses";
import getStudentsReducer from "./slice/getStudents/getStudents";

export const store = configureStore({
  reducer: {
    getStudents: getStudentsReducer,
    getClasses: getClassesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
