import { useDispatch, useSelector } from "react-redux";
import {
  getStudentById,
  selectStudentById,
} from "../redux/slice/getStudents/getStudents";
import { useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import EditForm from "../components/editForm";
// import { selectClasses } from "@mui/material";
export default function EditStudent() {
  const { id } = useParams();
  console.log(id);
  const studentById = useSelector(selectStudentById);
  const dispatch = useDispatch();
  const loadStudentdetail = (id) => {
    dispatch(getStudentById(id));
  };
  useLayoutEffect(() => {
    loadStudentdetail(id);
  }, [id]);
  console.log(studentById);
  return <EditForm studentById={studentById} role="edit"></EditForm>;
}
