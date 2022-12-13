
import { FloodOutlined } from '@mui/icons-material'
import {
   HANDLE_CHANGE,
   HANDLE_CHECK,
   FOLLOWES,
   USER_INFO,
   REPOS,
   RETAIN
} from './actions'

const reducer = (state, action) => {
  if(action.type===HANDLE_CHANGE){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===HANDLE_CHECK){
    return {
      ...state,
      [action.payload.name]:action.payload.checked
    }
   }

   if(action.type===FOLLOWES){
    return{
      ...state,
      followers:action.payload.data
    }
   }

   if(action.type===USER_INFO){
    return{
      ...state,
      userInfo:action.payload.data
    }
   }

   if(action.type===REPOS){
    return{
      ...state,
      userReposInfo:action.payload.data
    }
   }

   if(action.type===RETAIN){
    return{
      ...state
    }
   }


  throw new Error(`no such action : ${action.type}`)
}

export default reducer
