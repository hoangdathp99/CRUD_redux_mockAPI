import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import {
  getStudentById,
  resetStatus_add,
  selectStatus_edit,
  selectStudentById,
} from "../redux/slice/getStudents/getStudents";
export default function EditStudent() {
  const { id } = useParams();
  const status_edit = useSelector(selectStatus_edit);
  const studentById = useSelector(selectStudentById);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (status_edit === "done") {
      dispatch(resetStatus_add());
      navigate(-1);
    }
  }, [status_edit]);
  const loadStudentdetail = (id) => {
    dispatch(getStudentById(id));
  };
  useLayoutEffect(() => {
    loadStudentdetail(id);
  }, [id]);

  return <EditForm studentById={studentById} role="edit"></EditForm>;
}
