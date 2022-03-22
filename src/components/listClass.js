import React from "react";
import { useSelector } from "react-redux";
import { selectClasses } from "../redux/slice/getClasses/getClasses";

export default function ListClass() {
  const Class = useSelector(selectClasses);

  return <div className="class">{Class[0].name}</div>;
}
