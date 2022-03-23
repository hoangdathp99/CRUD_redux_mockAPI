import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { selectClasses } from "../redux/slice/getClasses/getClasses";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudents,
  editStudent,
  resetStatus_add,
  selectStatus_edit,
} from "../redux/slice/getStudents/getStudents";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function EditForm({ studentById }) {
  const [student, setStudent] = useState({});
  //   const [classname, setClassname] = useState("");
  const [value, setValue] = useState(null);
  const { name, dob, address, gender, classId } = student;
  const ListClasses = useSelector(selectClasses);
  const status_edit = useSelector(selectStatus_edit);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var classid = "";
  console.log(studentById.classId);
  //   console.log(ListClasses.findIndex(studentById.classId));
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
    setStudent(studentById);
    if (student.classId != null) {
      console.log(student.classId);
    }
    classid = student.classId;
  }, [studentById]);
  const onValueChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);
  };
  const handleDate = (e) => {
    // setValue(e);
    // format(e, "dd/MM/yyyy");
    var input = e;
    var date = format(input, "MM/dd/yyyy");
    console.log(date);
    setStudent({ ...student, ["dob"]: date });
    // setTime(input);
    console.log({ student });
  };
  const editStudentDetail = (event) => {
    event.preventDefault();
    console.log("edit");
    console.log(student);
    dispatch(editStudent(student));
    // const res = await axios.put(
    //   "http://localhost:3001/students/" + id,
    //   student
    // );
    // console.log(res);
  };
  const classes = useStyles();
  return (
    <div>
      {student.id !== 0 ? (
        <form
          className={classes.container}
          onSubmit={(e) => editStudentDetail(e)}
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              //   placeholder={studentById.name}
              //   defaultValue={studentById.name}
              label="Name"
              required
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              id="my-input"
            />
          </FormControl>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                required
                label="Date of birth"
                value={dob}
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
            value={address}
            id="my-input"
          ></TextField>

          <TextField
            fullWidth
            label="gender"
            required
            onChange={(e) => onValueChange(e)}
            name="gender"
            value={gender}
            id="my-input"
          />
          <FormControl fullWidth>
            <InputLabel>Class</InputLabel>
            <Select
              key={`select-${studentById.classId}`}
              style={{ minWidth: "30px" }}
              label="Class"
              //   required
              //   displayEmpty
              id="my-input"
              name="classId"
              defaultValue={studentById.classId ?? " "}
              onChange={(e) => onValueChange(e)}
            >
              {ListClasses.map((Class) => {
                // console.log(Class);
                return (
                  <MenuItem
                    key={Class.id}
                    value={Class.id}
                    // defaultValue={Class.name}
                    // selected={Class.id === student.classId}
                  >
                    {Class.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="outlined"
            // onClick={(e) => {
            //   editStudentDetail(student.id);
            // }}
          >
            Add
          </Button>
        </form>
      ) : (
        // <div>Hello</div>
        // <form
        //   className={classes.container}
        //   onSubmit={(e) => editStudentDetail(student.id)}
        //   autoComplete="off"
        // >
        //   <FormControl fullWidth>
        //     <TextField
        //       //   placeholder={studentById.name}
        //       defaultValue={studentById.name}
        //       label="Name"
        //       required
        //       onChange={(e) => onValueChange(e)}
        //       name="name"
        //       value={student.name}
        //       id="my-input"
        //     />
        //   </FormControl>
        //   <FormControl fullWidth>
        //     <LocalizationProvider dateAdapter={AdapterDateFns}>
        //       <MobileDatePicker
        //         required
        //         label="Date of birth"
        //         value={student.dob}
        //         onChange={(newValue) => handleDate(newValue)}
        //         renderInput={(params) => (
        //           <TextField
        //             {...params}
        //             helperText={params?.inputProps?.placeholder}
        //           />
        //         )}
        //       />
        //     </LocalizationProvider>
        //   </FormControl>
        //   <TextField
        //     fullWidth
        //     label="address"
        //     required
        //     onChange={(e) => onValueChange(e)}
        //     name="address"
        //     value={address}
        //     id="my-input"
        //   ></TextField>

        //   <TextField
        //     fullWidth
        //     label="gender"
        //     required
        //     onChange={(e) => onValueChange(e)}
        //     name="gender"
        //     value={gender}
        //     id="my-input"
        //   />
        //   <FormControl fullWidth>
        //     <InputLabel>Class</InputLabel>
        //     <Select
        //       style={{ minWidth: "30px" }}
        //       label="Class"
        //       required
        //       //   displayEmpty
        //       id="my-input"
        //       name="classId"
        //       //   placeholder=
        //       //   value="asca"
        //       //   defaultValue={1 ?? " "}
        //       onChange={(e) => onValueChange(e)}
        //     >
        //       {ListClasses.map((Class) => {
        //         // console.log(Class);
        //         return (
        //           <MenuItem
        //             key={Class.id}
        //             value={Class.id}
        //             // defaultValue={Class.name}
        //             // selected={Class.id === student.classId}
        //           >
        //             {Class.name}
        //           </MenuItem>
        //         );
        //       })}
        //     </Select>
        //   </FormControl>
        //   <Button
        //     type="submit"
        //     // variant="outlined"s
        //     // onClick={(e) => {
        //     //   editStudentDetail(student.id);
        //     // }}
        //   >
        //     Add
        //   </Button>
        // </form>
        <div></div>
      )}
    </div>
  );
}
