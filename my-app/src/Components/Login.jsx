import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Popover, TextField } from '@mui/material' 
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './component.css';


export default function Login(){
    const [name , setName] = useState("Madhav");
    const [email , setEmail] = useState("madhav@gmail.com");
    const [open , setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();
    const whenButtonIsClick = () => {
        console.log("Welcome",email,name);
        Navigate("/home");
        alert("Welcome " + name);
    }
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
            <div className='login'>
                <TextField variant="outlined" label = "Name" type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)}/> <br />
                <TextField variant="outlined" label = "Email"  type="email" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br />
                <Button variant="contained" onClick={whenButtonIsClick}>Login</Button>
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