import { delete_user, add_user, update_user } from "./userType";
import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userType'

export const addUser=(user)=>{
    console.log("addUSer")
    return {
        type: add_user,
        payload : user
    }
}

export const deleteUser=(index)=>{
    
    return {
        type:  delete_user,
        index : index
    }
}

export const updateUser = (user , index)=>{
    return{
        type : update_user,
        payload : user,
        index : index
    }
}



export const fetchUsers = () => {
    return (dispatch) => {
        console.log('fetch')
      dispatch(fetchUsersRequest())
      axios
        .get('/api/getalldata')
        .then(response => {
          const users = response.data
          console.log(users)
          console.log('user')
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
  
  export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }


  export const addUserApi= (value) =>{
    return (dispatch) => {
        axios
          .post('/api/add' ,value)
          .then(response => {
            const users = response.data
            console.log(users)
            dispatch(fetchUsers())
          })
          .catch(error => {
            console.log(error.message)
          })
      }

  }

export const updateUserApi =(name ,values) =>{
    return (dispatch) => {
        const obj = {name:name , newData :values}
        axios
          .post('/api/update' ,obj)
          .then(response => {
            const users = response.data
            console.log(users)
            dispatch(fetchUsers());
          })
          .catch(error => {
            console.log(error.message)
          })
      }
}

export const deleteUserApi =(name,address) =>{
    return (dispatch) => {
        const obj = {name:name , address : address}
        axios
          .post('/api/remove' ,obj)
          .then(response => {
            const users = response.data
            console.log(users)
            dispatch(fetchUsers());
          })
          .catch(error => {
            console.log(error.message)
          })
      }
}