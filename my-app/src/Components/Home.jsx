import React from 'react'
import { Link } from 'react-router-dom'

export default function Boil() {
    return(
        <div> <h1 style={{textAlign: 'center' ,marginTop: 100}}>Welcome</h1>
        <br />
        <h2 style={{textAlign: 'center'}}>Lets Start to Make Maggi</h2><br /><br />
        <div style={{textAlign: 'center'}}><Link to="/step-1">Step 1</Link></div>
            
            
            
        </div>
    )
}