import React from 'react'
import { Link } from 'react-router-dom'

export default function Boil() {
    return(
        <div>
            <h1 style={{textAlign: 'center' ,marginTop: 100}}>Step 1</h1>
            <br />
            <h2 style={{textAlign: 'center'}}>Boil 2 Cups of Water in a boul</h2><br /><br />
            <div style={{textAlign: 'center'}}><Link to="/step-2" >Step 2</Link></div>
            
        </div>
    )
}
