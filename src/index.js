import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListClass from "./components/listClass";
import "./index.css";
import { store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import AddStudents from "./view/AddStudents";
import EditStudent from "./view/EditStudent";
import ListStudents from "./view/ListStudents";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Routes>
          <Route path="/" element={<ListStudents />} />
          <Route path="/ListClasses" element={<ListClass />} />
          <Route path="/ListStudents" element={<ListStudents />} />
          <Route path="/Add" element={<AddStudents />} />
          <Route path="/Edit/:id" element={<EditStudent />} />
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
