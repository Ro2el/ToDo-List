
import {reduce,get, cloneDeep} from 'lodash'
import Redux from 'redux'
import { combineReducers } from 'redux'
import {createUser, uuidv4 } from '../users'
const data=createUser()

const initState= {users: data, tasks:{}}


 const setdata=(reducerState, action)=> {
    const newState = cloneDeep(reducerState)
    // const uuid = uuidv4()
    // console.log(newState, action)
    // newState.data = { ...newState.data, [uuid]: action.data }
    // newState.active= uuid
    newState.data = { ...newState.data,[action.data.id]:action.data }

    
    return newState

}
const reducersArr= ['users','tasks', 'subtasks']

export const buildreducers=()=>{
    let reducers=reduce (reducersArr,(result, singlereducersArr)=>{
        const handlers= {
            [`setdata_${singlereducersArr}`]: setdata
        }
        result[singlereducersArr]=(state=get(initState,singlereducersArr, {}),action)=>(get(handlers,action.type,d=>d)(state,action))
        return result 
    },{})
    return reducers
        
}

export const rootReducers= combineReducers(buildreducers());
// const obj={red1:"useReducer", red2:"tasksReducer",red3:"subReducer"}
