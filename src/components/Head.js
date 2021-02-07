import React from 'react'
import NightsStayRounded from '@material-ui/icons/NightsStayRounded';
import IconButton from '@material-ui/core/IconButton';
import TimelineIcon from '@material-ui/icons/Timeline';
function Head({text}) {
    return (
        <header className="d-flex justify-content-between py-4 px-4 ">
            <div className="text-white">
               <h6 className="p-0 m-0">{text}</h6>
               <p className="p-0 m-0"><small className="text-muted">Lorem, ipsum dolor sit amet consecte?</small></p>
            </div>

            <div className="pr-3">
                <IconButton className="p-0 mr-1"><NightsStayRounded className="rounded p-1 bg-white text-dark"/></IconButton>
                <IconButton className="p-0 ml-2"><TimelineIcon className="rounded p-1 bg-primary text-white"/></IconButton>
            </div>
        </header>
    )
}

export default Head
