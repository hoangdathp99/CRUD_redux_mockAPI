import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveAppBar from "./components/nav";
import {
  getClasses,
  selectClasses,
  selectStatusClass,
} from "./redux/slice/getClasses/getClasses";

function App() {
  const classes = useSelector(selectClasses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClasses());
  }, []);

  console.log(classes);
  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
}

export default App;
