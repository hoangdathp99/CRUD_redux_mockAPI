import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import { v4 as uuid } from "uuid";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectClasses } from "../redux/slice/getClasses/getClasses";
import {
  addStudents,
  editStudent,
  resetStatus_add,
  selectStatus_add,
  selectStatus_edit,
} from "../redux/slice/getStudents/getStudents";

export default function EditForm({ studentById, role }) {
  const [student, setStudent] = useState({});
  const [value, setValue] = useState(null);
  const { name, dob, address, gender, classId } = student;
  const ListClasses = useSelector(selectClasses);
  const status_edit = useSelector(selectStatus_edit);
  const status_add = useSelector(selectStatus_add);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(uuid());
  const uid = useMemo(() => {
    return uuid();
  }, []);
  console.log(`${studentById != null ? studentById.classId : uid}`);
  const useStyles = makeStyles({
    container: {
      display: "block",
      width: "50%",
      margin: "5% 0 0 25%",
      "& > *": {
        marginTop: 20,
      },
    },
  });
  useEffect(() => {
    if (status_edit === "done") {
      dispatch(resetStatus_add());
      navigate(-1);
    }
  }, [status_edit]);
  useEffect(() => {
    if (status_add === "done") {
      dispatch(resetStatus_add());
      navigate(-1);
    }
  }, [status_add]);
  useLayoutEffect(() => {
    if (studentById != null) {
      setStudent(studentById);
    }
  }, [studentById]);
  const onValueChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);
  };
  const handleDate = (e) => {
    setValue(e);

    var input = e;
    var date = format(input, "MM/dd/yyyy");
    console.log(date);
    setStudent({ ...student, ["dob"]: date });

    console.log({ student });
  };
  const editStudentDetail = (event) => {
    event.preventDefault();
    console.log("edit");
    console.log(student);
    dispatch(editStudent(student));
  };
  const addStudentDetail = () => {
    console.log("add");
    dispatch(addStudents(student));
  };
  const classes = useStyles();
  return (
    <div>
      <form
        className={classes.container}
        onSubmit={
          role === "edit"
            ? (e) => editStudentDetail(e)
            : (e) => addStudentDetail()
        }
        autoComplete="off"
      >
        <FormControl fullWidth>
          <TextField
            label="Name"
            required
            onChange={(e) => onValueChange(e)}
            name="name"
            value={name || ""}
            id="my-input"
          />
        </FormControl>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              required
              label="Date of birth"
              value={dob ?? value}
              onChange={(newValue) => handleDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={params?.inputProps?.placeholder}
                />
              )}
            />
          </LocalizationProvider>
        </FormControl>
        <TextField
          fullWidth
          label="address"
          required
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address || ""}
          id="my-input"
        ></TextField>

        <TextField
          fullWidth
          label="gender"
          required
          onChange={(e) => onValueChange(e)}
          name="gender"
          value={gender || ""}
          id="my-input"
        />
        <FormControl fullWidth>
          <InputLabel>Class</InputLabel>
          <Select
            key={`select-${studentById != null ? studentById.classId : uid}`}
            style={{ minWidth: "30px" }}
            label="Class"
            required
            id="my-input"
            name="classId"
            defaultValue={studentById != null ? studentById.classId : ""}
            onChange={(e) => onValueChange(e)}
          >
            {ListClasses.map((Class) => {
              return (
                <MenuItem key={Class.id} value={Class.id}>
                  {Class.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined">
          Add
        </Button>
      </form>
    </div>
  );
}
