import React from 'react'
import './aside.css'
import './PortfolioCard.css'
import PortfolioData from './PortfolioData'
function DetailedCard({title,logo,bgcolor=0,data=0}) {
    return (
        <div style={{backgroundColor:"#1A1A1E"}} className="p-4 curve mt-4 mx-3 pcard">
           <div className="d-flex"> <i className={`${logo} text-white mx-2`}/><p className="text-white">{title}</p></div> 
            <PortfolioData/>
        </div>
        
    )
}

export default DetailedCard
