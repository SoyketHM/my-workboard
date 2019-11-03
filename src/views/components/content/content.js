import React from "react";
import EmpCard from "../emp_card";
import { Grid } from "@material-ui/core";
import "./content.css";

function Content({ employees }) {
  const [selectEmp, setSelectEmp] = React.useState({});

  const handleClickOpen = (id) => {
    setSelectEmp(employees.find(emp => emp.id === id))
  };

  return (
    <div className="content__container">
      <Grid container spacing={3}>
        {employees.map(emp => (
          <EmpCard key={emp.id} employee={emp}  />
        ))}
      </Grid>
    </div>
  );
}

export default Content;
