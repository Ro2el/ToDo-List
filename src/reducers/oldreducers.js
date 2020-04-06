// import { createUser, uuidv4 } from '../users'
// import { combineReducers } from 'redux'

// const users = createUser()

// const usersReducer = (state = { data: users }, action) => {
//     // console.log( users,"iaaaam heereeeeeeeeeee")  
//     return state
// }


// const tasksReducer = (state = { data: {} }, action) => {
//     if (action.type == 'ADDTASK') {
//         const newState = { ...state }
//         const uuid = uuidv4()
//         newState.data = { ...newState.data, [uuid]: action.payload }
//         return newState
//     } else {
//         return state
//     }
// }
// const subReducer = (state = { data: {} }, action) => {
//     if (action.type == 'ADDSUBTASK') {
//         const newState = { ...state }
//         const uuid = uuidv4()
//         newState.data = { ...newState.data, [uuid]: action.payload }
//         console.log(newState.data)
//         return newState
//     } else {
//         return state
//     }
// }


// const combinedReducers = combineReducers({ usersReducer, tasksReducer,subReducer })

// export default combinedReducers

