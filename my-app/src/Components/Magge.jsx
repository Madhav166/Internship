import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';
import { Button } from '@mui/material' 

export default function Magge() {
    return(
        <div className='text'> 
            <h1 className='header'>Step 2</h1>
            <br />
            <h2>Add The Magge to the Boiled Water</h2><br /><br />

            <Link to="/step-3"><Button variant="contained" >Step 3</Button></Link>
        </div>
    )
}
