import React from 'react'
import { useAppContext } from '../context/appContext'


const Followers = () => {
    let {followers}=useAppContext()
    
    const Repo= url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div style={{overflowY:"scroll",height:"300px"}}>
        <h2>Followers</h2>

          {
            followers && followers?.map((person)=>{
              return <div style={{display:"flex",alignItems:'center',gap:"40px",marginBottom:"20px"}}>
                <img style={{height:"50px",width:"50px",borderRadius:'50%'}} src={person?.avatar_url}/>
           <div>
             <h4 style={{margin:"0px"}}>{person?.login}</h4>
             <p className='dark' onClick={()=>Repo(person?.html_url)} >{person?.html_url}</p>
            </div>
           </div>
        })
      }      
    </div>
  )
}

export default Followers
