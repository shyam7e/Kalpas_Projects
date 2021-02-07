import React from 'react'
import './roles.css'
function Roles({role,colors}) {
    return (
        <p style={{color:colors}}className=" design rounded px-1 mx-1 py-0 my-0">{role}</p>
    )
}

export default Roles
