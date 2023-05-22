import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';
import { Button } from '@mui/material' 

export default function Boil() {
    return(
        <div className='text'>
            <h1 className='header'>Step 1</h1>
            <br />
            <h2>Boil 2 Cups of Water in a boul</h2><br /><br />
            <Link to="/step-2"><Button variant="contained" >Step 2</Button></Link>

        </div>
    )
}
