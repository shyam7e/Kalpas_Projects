import React from 'react'
import './task.css'
import Roles from './Roles'

import ReactApexChart from 'react-apexcharts'
import './proj.css'
function Projects({text,roles}) {


    const serie=['70']

    var option = {
        chart: {
          height: 80,
          type: "radialBar"
        },
        
        plotOptions: {
          radialBar: {
            hollow: {
              
              size: "30%"
            },
           
            dataLabels: {
              enabled:false,
              
              name: {
                offsetY: -10,
                show: false,
                color: "#888",
                fontSize: "8px"
              },
              value: {
                color: "#ffffff",
                fontSize: "8px",
                show: false,
              }
            }
          }
        },
      
        stroke: {
          lineCap: "round",
        },
        labels: ["Progress"]
      };
      
    return (
        
            <div className="d-flex justify-content-start align-items-center flex-row 
        curve2 card text-white text-center projj rounded pr-2 pl-2 m-2 mr-5 ml-0"> 

            {/* <div className="p-2">
                <div className="bg-info rounded-circle" style={{height:"40px" ,width:"40px"}}> 
                            
                </div>
            </div> */}
            <div id="chart" className="p-0 m-0" > 
            <ReactApexChart className="p-0 m-0" options={option} series={serie} 
            type="radialBar" width={40} height={80} 
            style={{fontSize:"8px!important"}}/>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="d-flex justify-content-start"><p className="px-1 m-0"><small>{text}</small></p></div> 
            <div className="d-flex p-0 my-1 ">
                 {
                    roles.map(data=>(<Roles role={data.role} colors={data.colors}/>))
                 }
            </div>
            
        
        </div>
            
        
        
        
        </div>
        
        
        
    )
}

export default Projects
