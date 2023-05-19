import React from 'react'
import { Link } from 'react-router-dom'
export default function Magge() {
    return(
        <div>
            <h1 style={{textAlign: 'center' ,marginTop: 100}}>Step 2</h1>
            <br />
            <h2 style={{textAlign: 'center'}}>Add The Magge to the Boiled Water</h2><br /><br />
            <div style={{textAlign: 'center'}}><Link to="/step-3" >Step 3</Link></div>
            
        </div>
    )
}
