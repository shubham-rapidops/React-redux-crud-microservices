import { add_user, delete_user, update_user } from "./userType";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userType'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// const initialState= { user :[
//     {
      
//       name: 'Mike',
//       age: 32,
//       address: '10 Downing Street',
//     },
//     {
      
//       name: 'John',
//       age: 42,
//       address: '10 Downing Street',
//     },
//   ]};


const userReducer = (state = initialState , action)=>{
    switch(action.type){
        case add_user:
          return  { ...state , users: [...state.users , action.payload] }

        case delete_user:
          state.users.splice(action.index, 1)
          return {...state , users:[...state.users]}
        
        case update_user:
          state.users[action.index] = action.payload
          return {...state , users : [...state.users]}
        
          case FETCH_USERS_REQUEST:
            return {
              ...state,
              loading: true
            }
          case FETCH_USERS_SUCCESS:
            return {
              loading: false,
              users: action.payload,
              error: ''
            }
          case FETCH_USERS_FAILURE:
            return {
              loading: false,
              users: [],
              error: action.payload
            }

        default:
            return state;
    }
}


export default userReducer;