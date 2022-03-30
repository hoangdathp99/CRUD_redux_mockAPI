import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import {
  getStudentById,
  selectStudentById,
} from "../redux/slice/getStudents/getStudents";
export default function EditStudent() {
  const { id } = useParams();

  const studentById = useSelector(selectStudentById);
  const dispatch = useDispatch();
  const loadStudentdetail = (id) => {
    dispatch(getStudentById(id));
  };
  useLayoutEffect(() => {
    loadStudentdetail(id);
  }, [id]);

  return <EditForm studentById={studentById} role="edit"></EditForm>;
}
