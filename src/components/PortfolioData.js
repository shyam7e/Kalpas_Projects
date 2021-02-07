import React from 'react'
import './PortfolioCard.css'
function PortfolioData() {
    return (
        <div className="d-flex justify-content-between ">

                <div className="text-white d-flex flex-column p1 p-0 m-0 text-muted ">
                    <p className="p-0 m-0">This week</p>
                    <p className="p-0 m-0">This month</p>
                    <p className="p-0 m-0">This year</p>
                </div>
                <div className="text-white d-flex flex-column p">
                    <h6>1.35M</h6>
                    <p className="p p-0 m-0 text-muted">last updated at 12:40</p>
                </div>
            </div>
    )
}

export default PortfolioData
