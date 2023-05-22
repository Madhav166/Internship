import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';
import { Button } from '@mui/material' 

export default function Masala() {
    return(
        <div className='text'>
        <h1 className='header'>Step 3</h1>
        <br />
        <h2 >Add The Masala to the Boiled Water</h2><br /><br />
        <Link to="/step-4"><Button variant="contained" >Step 4</Button></Link>

        </div>
    )
}
