import { useDispatch, useSelector } from "react-redux";
import {
  getStudentById,
  selectStatus,
  selectStatus_edit,
  selectStudentById,
  selectStudents,
} from "../redux/slice/getStudents/getStudents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { selectClasses } from "../redux/slice/getClasses/getClasses";
import { format } from "date-fns";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import EditForm from "../components/editForm";
// import { selectClasses } from "@mui/material";
export default function EditStudent() {
  const { id } = useParams();
  console.log(id);
  const studentById = useSelector(selectStudentById);
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
  const loadStudentdetail = (id) => {
    dispatch(getStudentById(id));
  };
  useEffect(() => {
    loadStudentdetail(id);
  }, [id]);
  console.log(studentById);
  return (
    <EditForm studentById={studentById}></EditForm>
    // <form
    //   className={classes.container}
    //   // onSubmit={(e) => addStudentDetail()}
    //   autoComplete="off"
    // >
    //   <FormControl fullWidth>
    //     <TextField
    //       placeholder={studentById.name}
    //       label="Name"
    //       required
    //       onChange={(e) => onValueChange(e)}
    //       name="name"
    //       value={name}
    //       id="my-input"
    //     />
    //   </FormControl>
    //   <FormControl fullWidth>
    //     <LocalizationProvider dateAdapter={AdapterDateFns}>
    //       <MobileDatePicker
    //         required
    //         label="Date of birth"
    //         value={value}
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
    //     // value={address}
    //     id="my-input"
    //   ></TextField>

    //   <TextField
    //     fullWidth
    //     label="gender"
    //     required
    //     onChange={(e) => onValueChange(e)}
    //     name="gender"
    //     // value={gender}
    //     id="my-input"
    //   />
    //   <FormControl fullWidth>
    //     <InputLabel>Class</InputLabel>
    //     <Select
    //       style={{ minWidth: "30px" }}
    //       label="Class"
    //       required
    //       id="my-input"
    //       name="classId"
    //       onChange={
    //         (e) => onValueChange(e)
    //         // console.log(e.target.value);
    //       }
    //     >
    //       {ListClasses.map((Class) => {
    //         // console.log(Class);
    //         return (
    //           <MenuItem key={Class.id} value={Class.id}>
    //             {Class.name}
    //           </MenuItem>
    //         );
    //       })}
    //     </Select>
    //   </FormControl>
    //   <Button type="submit" variant="outlined">
    //     Add
    //   </Button>
    // </form>
  );
}
