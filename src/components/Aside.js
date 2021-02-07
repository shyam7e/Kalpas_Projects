import React,{useState} from 'react'
import Logo from './Logo'
import SearchForm from './searchForm'
import LeftNav from './LeftNav'
import ProfileDetails from './ProfileDetails'
import './aside.css'
function Aside({userName,userMail})
{
    const [search,setSearch]=useState();

    const LeftNavData=[
        {
            logo:"fa fa-dashboard",
            text:"Dashboard"
        },
        {
            logo:"fa fa-briefcase",
            text:"Project"
        }
        ,
        {
            logo:"fa fa-user",
            text:"Portfolio"
        },
        {
            logo:"fa fa-users",
            text:"Clients"
        }
    ]
   
    return (
        <aside className="py-4">
            <Logo />
            <SearchForm search={search} setSearch={setSearch}/>
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                {   
                    LeftNavData.map((data)=>(
                        <LeftNav logo={data.logo} text={data.text}/>
                    ))
                }
            </div>
            

            <ProfileDetails userName={userName} userMail={userMail}/>
           
        </aside>
    )
}

export default Aside
