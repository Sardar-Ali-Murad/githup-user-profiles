import React from 'react'
import {CiLocationArrow1} from "react-icons/ci"
import {AiOutlineLink}  from "react-icons/ai"
import {FaRegBuilding}  from "react-icons/fa"
import SearchForm from './SearchForm'
import RepoInfo from './RepoInfo'
import { useAppContext } from '../context/appContext'

const UserInfo = () => {
    let {userName,handleChange,userInfo,start}=useAppContext()

    const follow = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    const web = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  
  return (
    <div style={{background:'white',boxSizing:"border-box",padding:"20px"}} className="user">
    <div>
    {/*  */}
      <div className='grid-even-3'>
           <img style={{width:"70px",height:"70px",borderRadius:"50%"}} src={userInfo?.avatar_url}/>
           <div>
              <h5 style={{margin:"0px"}}>{userInfo?.name}</h5>
              <p style={{margin:"0px"}}>{userInfo?.twitter_username}</p>
           </div>
           <button style={{height:"47px"}} className='btn' onClick={()=>follow(userInfo?.html_url)}>Follow</button>
      </div>
      {/*  */}
    <p>{userInfo?.bio}</p>
    <div style={{marginTop:"40px"}}>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <CiLocationArrow1/>
         <p>{userInfo?.company}</p>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <FaRegBuilding/>
        <p>{userInfo?.location}</p>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <AiOutlineLink/>
        <a  className='light' onClick={()=>web(userInfo?.blog)}  style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>{userInfo?.blog}</a>
      </div>
    </div>
    </div>
    {/*  */}

      <div>

      </div>
  </div>
  )
}

export default UserInfo
