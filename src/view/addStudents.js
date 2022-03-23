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
import { Block } from "@mui/icons-material";
// import { Label } from "@mui/icons-material";
// import { useHistory } from "react-router-dom";
export default function AddStudents() {
  const ListClasses = useSelector(selectClasses);
  const status_add = useSelector(selectStatus_add);
  const [student, setStudent] = useState({});
  const [time, setTime] = useState("");
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(ListClasses);
  const { name, dob, address, gender, classId } = student;
  //   console.log(status_add);
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
    if (status_add === "done") {
      dispatch(resetStatus_add());
      navigate(-1);
    }
  }, [status_add]);
  const addStudentDetail = () => {
    dispatch(addStudents(student));
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleDate = (e) => {
    setValue(e);
    // format(e, "dd/MM/yyyy");
    var input = e;
    var date = format(input, "MM/dd/yyyy");
    console.log(date);
    setStudent({ ...student, ["dob"]: date });
    // setTime(input);
    console.log({ student });
  };
  const classes = useStyles();

  return (
    <form
      className={classes.container}
      onSubmit={(e) => addStudentDetail()}
      autoComplete="off"
    >
      <FormControl fullWidth>
        <TextField
          label="Name"
          required
          onChange={(e) => onValueChange(e)}
          name="name"
          // value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl fullWidth>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            required
            label="Date of birth"
            value={value}
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
        // value={address}
        id="my-input"
      ></TextField>

      <TextField
        fullWidth
        label="gender"
        required
        onChange={(e) => onValueChange(e)}
        name="gender"
        // value={gender}
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
      <Button type="submit" variant="outlined">
        Add
      </Button>
    </form>
  );
}
