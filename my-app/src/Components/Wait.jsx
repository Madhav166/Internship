import React from 'react'
import { Link } from 'react-router-dom'
export default function Wait() {
    return(
        
        <div>
                <h1 style={{textAlign: 'center' ,marginTop: 100}}>Step 4</h1>
        <br />
        <h2 style={{textAlign: 'center'}}>Wait 2-4 Minutes</h2><br /><br />
        <div style={{textAlign: 'center'}}><Link to="/step-5" >Step 5</Link></div>
            
        </div>
    )
}