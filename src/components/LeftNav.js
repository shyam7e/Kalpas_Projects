import React from 'react'
import './hover.css'
import IconButton from '@material-ui/core/IconButton';
function LeftNav({logo,text}) {
    return (
        <div className="d-flex flex-column align-items-center text-white my-2 ">
            <IconButton className="hoverChange text-white rounded m-2 p-1 " style={{backgroundColor:"#9A9AB5"}}>
            <i className={`${logo} px-1 icon`} ></i>
        </IconButton>
        <p className="p-0 m-0"><small>{text}</small></p>
        </div>
        
    )
}

export default LeftNav
