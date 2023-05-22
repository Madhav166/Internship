import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material' 
import './component.css';

export default function Boil() {
    return(
        <div className='text'> 
        <h1 className='header'>Welcome</h1>
        <br />
        <h2>Lets Start to Make Maggi</h2><br /><br />
        <Link to="/step-1"><Button variant="contained">Step 1</Button></Link>
        </div>
    )
}