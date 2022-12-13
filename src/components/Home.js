import React from 'react'
import SearchForm from './SearchForm'
import RepoInfo from './RepoInfo'
import UserInfo from './UserInfo'
import Followers from './Followers'
import Charts from './Charts'
import "./index.css"


const Home = () => {
   
  return (
    <div style={{overflowX:"hidden"}}>
      <SearchForm/>
      <RepoInfo/>
      <div className='grid-even-2 div-center-80 main-div-margins user-Info-Main'>
         <UserInfo/>
         <Followers/>
      </div>
      <Charts/>
    </div>
 
  )
}

export default Home
