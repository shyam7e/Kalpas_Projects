import React from 'react'
import './task.css'
import Roles from './Roles'
function Task({text,roles}) {
    return (
        <div className="curve taskbar card text-white pl-4 pr-2 m-2 d-flex flex-row align-items-center justify-content-between" style={{backgroundColor:"#1A1A1E"}}>
        
        <div className="d-flex align-items-center justify-content-start p-0 m-0">
        <input type="checkbox" className="mr-2 p-0"/>
         <p className="p-0 m-0 "><small>{text}</small></p>
        </div>
       <div className="d-flex flex-row align-items-center">
           <Roles role={roles.role} colors={roles.color} bgcolor={roles.bgcolor}/>
           <i className="fa fa-user-circle m-2"></i>
       </div>

    </div>
    )
}

export default Task
