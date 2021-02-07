import React from 'react'
import './roles.css'
function Roles({role,colors,bgcolor}) {
    return (
        <p style={{color:colors,backgroundColor:bgcolor}}className=" design rounded px-1 mx-1 py-0 my-0">{role}</p>
    )
}

export default Roles
