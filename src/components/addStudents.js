import { DatePicker, LocalizationProvider, MobileDatePicker } from "@mui/lab";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { selectClasses } from "../redux/slice/getClasses/getClasses";
import {
  addStudents,
  resetStatus_add,
  selectStatus_add,
} from "../redux/slice/getStudents/getStudents";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
export default function AddStudents() {
  const ListClasses = useSelector(selectClasses);
  const status_add = useSelector(selectStatus_add);
  const [student, setStudent] = useState({});
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(ListClasses);
  const { name, dob, address, gender, classId } = student;
  //   console.log(status_add);
  const useStyles = makeStyles({
    container: {
      width: "50%",
      margin: "5% 0 0 25%",
      "& > *": {
        marginTop: 20,
      },
    },
  });
  useEffect(() => {
    if (status_add === "done") {
      dispatch(resetStatus_add());
      navigate(-1);
    }
  }, [status_add]);
  const addStudentDetail = () => {
    dispatch(addStudents(student));
  };
  const onValueChange = (e) => {
    // console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleDate = (e) => {
    // format(e, "dd/MM/yyyy");
    var input = e;
    var date = format(input, "MM/dd/yyyy");
    console.log(date);
    setStudent({ ...student, ["dob"]: date });
    setTime(input);
    console.log({ student });
  };
  const classes = useStyles();
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="date of birth"
            value={dob}
            inputFormat="MM/dd/yyyy"
            onChange={(newValue) => handleDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          >
            Dob
          </MobileDatePicker>
        </LocalizationProvider>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">gender</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="gender"
          value={gender}
          id="my-input"
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Class</InputLabel>
        <Select
          id="my-input"
          name="classId"
          onChange={
            (e) => onValueChange(e)
            // console.log(e.target.value);
          }
        >
          {ListClasses.map((Class) => {
            // console.log(Class);
            return (
              <MenuItem key={Class.id} value={Class.id}>
                {Class.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addStudentDetail()}
        >
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
}
