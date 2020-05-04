import { add_user, delete_user, update_user } from "./userType";

const initialState= { user :[
    {
      
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]};


const userReducer = (state = initialState , action)=>{
    switch(action.type){
        case add_user:
          return  { ...state , user: [...state.user , action.payload] }

        case delete_user:
          state.user.splice(action.index, 1)
          return {...state , user:[...state.user]}
        
        case update_user:
          state.user[action.index] = action.payload
          return {...state , user : [...state.user]}

        default:
            return state;
    }
}


export default userReducer;