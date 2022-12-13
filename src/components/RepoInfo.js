import React from 'react'
import {RiGitRepositoryLine}  from "react-icons/ri"
import {SlUserFollow}  from "react-icons/sl"
import {SlPeople}  from "react-icons/sl"
import {BsCode}  from  "react-icons/bs"
import { useAppContext } from '../context/appContext'


const RepoInfo = () => {
    let {userName,handleChange,userInfo,start}=useAppContext()
  return (
    <div className='grid-even-4 div-center-80 main-div-margins info-main'>

    <div className='single-info'>
     <div className='repo-div'>
       <RiGitRepositoryLine className='repo'/>
     </div>
       <div>
          <h3>{userInfo?.public_repos}</h3>
          <p>Repos</p>
       </div>
    </div>

    <div className='single-info'>
     <div className='follow-div'>
       <SlUserFollow className='follow'/>
     </div>
       <div>
       <h3>{userInfo?.followers}</h3>
          <p>Followers</p>
       </div>
    </div>

    <div className='single-info'>
     <div className='follower-div'>
       <SlPeople className='follower'/>
     </div>
       <div>
         <h3>{userInfo?.following}</h3>
          <p>Following</p>
       </div>
    </div>

    <div className='single-info'>
     <div className='gist-div'>
       <BsCode className='gist'/>
     </div>
       <div>
         <h3>{userInfo?.public_gists}</h3>
         <p>Gists</p>
       </div>
    </div>

</div>
  )
}

export default RepoInfo
