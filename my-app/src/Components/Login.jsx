import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Popover, TextField } from '@mui/material' 
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './component.css';
import {Formik} from "formik";
import * as Yup from "yup";

export default function Login(){
    //const [Uname , setName] = useState("Madhav");
    //const [email , setEmail] = useState("madhav@gmail.com");
    const [open , setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {

    } ,[]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3,"Please Enter Atleast 3 Character.").required("Enter your name"),
        email: Yup.string().email("Please Enter valid email Address.").required("Enter your email"),
    });
    const initialValues = {
        name: "",
        email: "",
    };
    const onFormSubmit = (values) => {
        console.log("on the form submitted", values);
        alert("Form submitted");
        Navigate("/home");
        
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
      };
    return(
        <div>
            <h1 className='header' style={{textAlign: "center"}}>Login Form</h1>
            <div  className='avatar'  >
                <div className='avatar'  onClick={handleClick}> 
                    <Avatar sx={{ bgcolor: 'blue'}}>MD</Avatar>
                </div>
            </div>
            <div>
                <Formik initialValues = {initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onFormSubmit}>
                {({value ,errors, touched,isSubmitting ,handleChange,handleBlur ,handleSubmit}) =>(
                    <form onSubmit={handleSubmit}>
                    <div className='login'>
                    <TextField variant="outlined" label = "Name" type="text" id='name' name = "name" placeholder='name' onChange={handleChange} onBlur={handleBlur}/> 
                    {touched.name && errors.name && <span className='printError'> {errors.name}</span>}
                    <br />
                    
                    
                    <TextField variant="outlined" label = "Email"  type="email" id='email'  name = "email"  placeholder='email' onChange={handleChange} onBlur={handleBlur}/>
                    {touched.email && errors.email && <span className='printError'> {errors.email}</span>}
                    <br />
                    <Button variant="contained" type='submit'>Login</Button>
                    </div>
                    </form>
                )}
                
                </Formik>
            </div>
            
            <Popover
                open = {open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
                >
                <div style={{padding:5}}>
                    <h5>Madhav Dave</h5>
                    <LogoutOutlinedIcon />
                </div>
            </Popover>
  
        </div>
    );
}