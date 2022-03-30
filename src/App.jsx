import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveAppBar from "./components/Nav.jsx";
import {
  getClasses,
  selectClasses,
} from "./redux/slice/getClasses/getClasses";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClasses());
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
}

export default App;
