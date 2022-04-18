import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectClasses } from "../redux/slice/getClasses/getClasses";
import {
  addStudents,
  editStudent
} from "../redux/slice/getStudents/getStudents";


export default function EditForm({ studentById, role }) {
  const [student, setStudent] = useState({});
  const [value, setValue] = useState(null);
  const { name, dob, address, gender } = student;
  const ListClasses = useSelector(selectClasses);
  const dispatch = useDispatch();
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
  

  useLayoutEffect(() => {
    if (studentById != null) {
      setStudent(studentById);
    }
  }, [studentById]);
  const onValueChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleDate = (e) => {
    setValue(e);

    var input = e;
    var date = format(input, "MM/dd/yyyy");
    setStudent({ ...student, ["dob"]: date });
  };
  const editStudentDetail = (event) => {
    event.preventDefault();
    dispatch(editStudent(student));
  };
  const addStudentDetail = (event) => {
    event.preventDefault();
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
            : (e) => addStudentDetail(e)
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
            style={{ minWidth: "30px" }}
            label="Class"
            required
            id="my-input"
            name="classId"
            value={student?.classId || ""}
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
