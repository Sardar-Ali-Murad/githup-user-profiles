import React, { useReducer, useContext } from 'react'

import reducer from './reducer'



import {
  HANDLE_CHANGE,
  HANDLE_CHECK,
  FOLLOWES,USER, USER_INFO_INFO, USER_INFO,
  REPOS,
  RETAIN
} from './actions'



const initialState = {
    userName:"Peter",
    userInfo:{},
    followers:[],
    userReposInfo:[]
}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // The Starter Function

  let start=async()=>{
    try {
      let initial1=await fetch(`https://api.github.com/users/${state.userName}`)
      let final1=await initial1.json()
      if(final1 !== {}){
        dispatch({type:USER_INFO,payload:{data:final1}})      
      }
    } catch (error) {
      console.log(error)
      dispatch({type:RETAIN})
    }


    try {
      let initial2=await fetch(`https://api.github.com/users/${state.userName}/followers`)
      let final2=await initial2.json()
      // if(final2.length>1){
        dispatch({type:FOLLOWES,payload:{data:final2}})    
      // }
    } catch (error) {
      console.log(error)
      dispatch({type:RETAIN})
    }

  }

  React.useEffect(()=>{
    start()
  },[])

  React.useEffect(()=>{
    let charts=async ()=>{
      try {
        let initial3=await fetch(`https://api.github.com/users/${state?.userInfo?.login}/repos`)
        let final3=await initial3.json()
        if(final3.length>1){
          dispatch({type:REPOS,payload:{data:final3}})
        }
      } catch (error) {
        console.log(error)
      }
    }
    charts()
  },[state.userInfo,state.followers])

  // Ends
   
  function handleChange(name,value){
    dispatch({type:HANDLE_CHANGE,payload:{name:name,value:value}})
  }

  function handleCheck(name,checked){
    dispatch({type:HANDLE_CHECK,payload:{name:name,value:checked}})
  }


  
  return (
    <AppContext.Provider
    value={{
      ...state,
      handleChange,
      handleCheck,
      start
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
