import React, { useEffect } from "react";
// import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveAppBar from "./components/nav";
import ListStudents from "./components/listStudents";
import ListClass from "./components/listClass";
// import { Container } from "@material-ui/core";
import httpService from "./redux/services/httpService";
import {
  selectStatus,
  selectStudents,
  getStudents,
  addStudents,
  selectStatus_add,
} from "./redux/slice/getStudents/getStudents";
import {
  getClasses,
  selectClasses,
  selectStatusClass,
} from "./redux/slice/getClasses/getClasses";
import { Button } from "@mui/material";

function App() {
  // const students2 = useSelector(selectStudents);
  const classes = useSelector(selectClasses);
  // const status2 = useSelector(selectStatus);
  // const statusClass = useSelector(selectStatusClass);
  // const status_add = useSelector(selectStatus_add);
  const dispatch = useDispatch();
  // const test = httpService.GET("http://localhost:3001/students");
  useEffect(() => {
    // dispatch(getStudents());
    dispatch(getClasses());
  }, []);

  // console.log(students2);
  console.log(classes);
  // console.log(test);
  return (
    <div>
      <ResponsiveAppBar />
      {/* <Button
        onClick={(e) => {
          dispatch(
            addStudents({
              name: "dat3",
              dob: "11/11/1999",
              address: "HP",
              gender: "male",
              classId: 1,
            })
          );
          dispatch(getStudents());
        }}
      >Add</Button> */}
    </div>
  );
}

export default App;
