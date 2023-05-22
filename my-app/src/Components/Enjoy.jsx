import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';
import { Button } from '@mui/material' 

export default function Enjoy() {
    return(
        <div className='text'>
            <h1 className='header'>Step 5</h1>
        <br />
        <h2>Enjoy your Magge</h2><br /><br />
        <div className='button'><Link to="/"><Button variant="contained" className='toCenter'>Home</Button></Link></div>

            
        </div>
    )
}