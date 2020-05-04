import { delete_user, add_user, update_user } from "./userType";


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