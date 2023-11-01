import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, TextField } from "@mui/material";
import ShowEmp from "./ShowEmp";
const Addemp = () => {
  const [emp, setEmp] = useState([]);
  const[name,setName]=useState("");
  const[dept,setDept]=useState("");
  const[empid,setEmpid]=useState("");
  const[city,setCity]=useState("");
  const[pin,setPin]=useState("");
  const[phone,setPhone]=useState("");

  const getEmp = async () => {
    const result = await axios.get("http://localhost:5064/");
    setEmp(result.data);
  };
  
  useEffect(() => {
    getEmp();
  }, []);
  const addempHandle=async()=>{
  const payload={name,dept,empid,city,pin,phone}
  const result=await axios.post("http://localhost:5064/addemp",payload);
     getEmp();

}

   const handleDelete=async(_id)=>{
            const payload={_id};
            await axios.post("http://localhost:5064/delete",payload);
             getEmp();
}

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField variant="outlined" onChange={(e)=>setName(e.target.value)} fullWidth label="Emp Name" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined" onChange={(e)=>setDept(e.target.value)} fullWidth label="Emp dep" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined" onChange={(e)=>setEmpid(e.target.value)}fullWidth label="Emp id " />
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined"  onChange={(e)=>setCity(e.target.value)}fullWidth label="Emp city" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined" onChange={(e)=>setPin(e.target.value)} fullWidth label="Emp pin" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined" onChange={(e)=>setPhone(e.target.value)} fullWidth label="Emp phone" />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={addempHandle} variant="contained" fullWidth>
          Add employees
        </Button>
      </Grid>
      {emp.map((item) => (
        <Grid item xs={3}>
          <ShowEmp item={item} handleDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Addemp;
