import React from 'react'
import { Link } from 'react-router-dom'
export default function Masala() {
    return(
        <div><h1 style={{textAlign: 'center' ,marginTop: 100}}>Step 3</h1>
        <br />
        <h2 style={{textAlign: 'center'}}>Add The Masala to the Boiled Water</h2><br /><br />
        <div style={{textAlign: 'center'}}><Link to="/step-4" >Step 4</Link></div>
            
        </div>
    )
}
