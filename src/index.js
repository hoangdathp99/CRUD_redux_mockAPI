import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListClass from "./components/listClass";
import ListStudents from "./view/listStudents";
import AddStudents from "./view/addStudents";
import EditStudent from "./view/editStudent";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Routes>
          <Route path="/" element={<ListStudents />} />
          <Route
            path="/ListClasses"
            element={
              <ListClass
              // reload={true}
              />
            }
          />
          <Route
            path="/ListStudents"
            element={
              <ListStudents
              // reload={true}
              />
            }
          />
          <Route
            path="/Add"
            element={
              <AddStudents
              // reload={true}
              />
            }
          />
          <Route
            path="/Edit/:id"
            element={
              <EditStudent
              // reload={true}
              />
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
