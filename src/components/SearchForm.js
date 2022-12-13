import React from 'react'
import {BiSearchAlt2}  from "react-icons/bi"
import { useAppContext } from '../context/appContext'

const SearchForm = () => {
    let {userName,handleChange,userInfo,start}=useAppContext()


    function Change(e){
        handleChange(e.target.name,e.target.value)
      }
    
      function handleSubmit(e){
        e.preventDefault()
        start()
      }
  return (
    <div className='home-input div-center-60 main-div-margins'>
    <form onSubmit={handleSubmit}>
    <input placeholder='Enter The Gitup User' className='form-input roboto' name="userName" value={userName} onChange={Change}/>
    <BiSearchAlt2 className='search'/>
    <button className='btn' onClick={handleSubmit}>Serach</button>
    </form>
  </div>
  )
}

export default SearchForm
