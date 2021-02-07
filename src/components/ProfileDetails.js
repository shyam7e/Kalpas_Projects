import React from 'react'

function ProfileDetails({userName,userMail}) {
    return (
        <div className="mt-5 d-flex w-100 text-white align-items-center justify-content-center px-4">
                   <div>
                       <img src="https://via.placeholder.com/30" class="rounded-circle" alt=""/>
                    </div>
                  
                  <div className="d-flex flex-column p-0 ml-2">
                    <p className="p-0 m-0 p" style={{color:"#E3E3E3"}}>{userName}</p> 
                   <p className="p-0 m-0 text-muted p">{userMail}</p>
                  </div>
            </div>
    )
}

export default ProfileDetails
