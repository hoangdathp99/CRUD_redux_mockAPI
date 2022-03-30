import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchAppBar from "../components/Search";
// import { getStudentsSelector } from "../redux/slice/getDataSlice";
import {
  deleteStudent,
  getStudents,
  selectStatus,
  selectStatus_delete,
  selectStatus_edit,
  selectStudents,
} from "../redux/slice/getStudents/getStudents";
export default function ListStudents() {
  const students = useSelector(selectStudents);
  const status_delete = useSelector(selectStatus_delete);
  const dispatch = useDispatch();

  const [deleted_id, setDeleted_id] = useState("");

  useEffect(() => {
    if (status_delete === "done" || status_delete == "idle")
      dispatch(getStudents("?_expand=class"));
  }, [status_delete]);
  
  const useStyles = makeStyles({
    table: {},
    thead: {
      "& > *": {
        fontSize: 20,
        background: "#000000",
        color: "#FFFFFF",
      },
    },
    row: {
      "& > *": {
        fontSize: 18,
      },
    },
  });
  const classes = useStyles();
  const deleteUserData = (id) => {
    dispatch(deleteStudent(id));
    setDeleted_id(id);
  };
  return (
    <Container maxWidth="1140px" style={{ padding: "30px" }}>
      <Button
        color="primary"
        variant="contained"
        style={{ margin: "30px 0" }}
        component={Link}
        to={`/add`}
      >
        ADD
      </Button>
      <SearchAppBar />
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>dob</TableCell>
            <TableCell>address</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>class</TableCell>
            <TableCell style={{ width: "25%" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow className={classes.row} key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.class.name}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ margin: 30 }}
                  component={Link}
                  to={`/Edit/${student.id}`}
                >
                  Edit
                </Button>

                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteUserData(student.id)}
                  disabled={
                    status_delete === "loading" && student.id == deleted_id
                      ? true
                      : false
                  }
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
