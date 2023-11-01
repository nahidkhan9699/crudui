import React from "react";
import { Card, CardContent, Button } from "@mui/material";
const ShowEmp = ({ item,handleDelete }) => {

 
  return (
    <Card sx={{ bgcolor: "lightgray" }} align="center">
      <CardContent>
        <img src="" alt="" />
        <h3>Emp name:{item.name}</h3>
        <h6>emp dept:{item.dept}</h6>
        <h6>Emp id:{item.empid}</h6>
        <h6>emp city:{item.city}-{item.pin}</h6>
        <h6>phone:{item.phone}</h6>
        <Button variant="contained" color="warning" onClick={()=>handleDelete(item._id)}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default ShowEmp;
