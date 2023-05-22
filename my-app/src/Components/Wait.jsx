import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';
import { Button } from '@mui/material' 

export default function Wait() {
    return(
        
        <div className='text'>
                <h1 className='header'>Step 4</h1>
        <br />
        <h2>Wait 2-4 Minutes</h2><br /><br />
        <Link to="/step-5"><Button variant="contained" >Step 5</Button></Link>

            
        </div>
    )
}