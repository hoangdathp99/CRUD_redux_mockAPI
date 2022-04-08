import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";
import {
  resetStatus_add,
  selectStatus_add,
} from "../redux/slice/getStudents/getStudents";
export default function AddStudents() {
  const status_add = useSelector(selectStatus_add);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status_add === "done") {
      // console.log("navigate");
      dispatch(resetStatus_add());
      navigate("../ListStudents", { replace: true });
    }
    // console.log(status_add);
  }, [status_add]);
  return <EditForm studentById={null} role="add"></EditForm>;
}
