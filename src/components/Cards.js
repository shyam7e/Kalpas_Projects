import React from 'react'
import './task.css'
import './hover.css'
import IconButton from '@material-ui/core/IconButton';
function Cards({logo,text}) {
    return (
        
                <IconButton className="curve3 text-white hoverChange d-flex flex-column mx-2 mb-3" style={{backgroundColor:"#1A1A1E"}}>
                    <div className=" hover d-flex flex-column px-4 py-2 ">
                    <i style={{fontSize:"18px"}} className={`${logo} text-primary mb-2`}></i>
                       <span style={{fontSize:"10px"}}>{text}</span>
                    </div>
                  
                 </IconButton>
               
          
           

   
    )
}

export default Cards
