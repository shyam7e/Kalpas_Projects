import React from 'react'
import './aside.css'
function searchForm({search,setSearch}) {
    const submitform=(e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={submitform}>
               <div className="sbox">
               <i className="fa fa-search i"></i>
                     <input  type="text" placeholder="Search" 
                     value={search} 
                     onChange={e=>setSearch(e.target.value)} 
                     style={{backgroundColor:"#121213"}}
                     className="mx-4 searchbox"/>
                
               </div> 
            </form>
    )
}

export default searchForm;
