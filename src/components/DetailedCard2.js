import React from 'react'
import './aside.css'
import './PortfolioCard.css'
function DetailedCard({title,logo,text}) {
    return (
        <div style={{backgroundColor:"#1A1A1E"}} className="p-4 curve mt-4 mx-3 pcard">
           <div className="d-flex"> <i className={`${logo} text-white mx-2`}/><p className="text-white">{title}</p></div> 
            <div className="px-4 py-2 curve bg-black text-white" style={{backgroundColor:"#121213"}}>
                {text}
            </div>
        </div>
        
    )
}

export default DetailedCard
