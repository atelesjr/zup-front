import React from 'react'
import spinner from './Wedges.svg'

const Spinner = props =>
    <div className="spinner">
        <img src={spinner} alt="spinner"/>
        <p>Loading...</p>
    </div>
    
export default Spinner