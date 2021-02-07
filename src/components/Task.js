import React from 'react'
import './task.css'

function Task({text}) {
    return (
        <div className="curve taskbar card text-white pl-4  m-2 d-flex flex-row align-items-center justify-content-start" style={{backgroundColor:"#1A1A1E"}}>
        
        <div className="d-flex align-items-center justify-content-start p-0 m-0">
        <input type="checkbox" className="mr-2 p-0"/> <p className="p-0 m-0 pr-5"><small>{text}</small></p><i className="fa fa-user-circle m-2"></i>
        </div>
       

    </div>
    )
}

export default Task
