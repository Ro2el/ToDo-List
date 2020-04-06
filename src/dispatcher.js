export const mapDispatchToProps=(dispatch)=>({
    setdata : (reducerName,data)=> dispatch ({
        type:`setdata_${reducerName}`,
        data
    })
})

// import {reduce,get,map} from 'lodash'

// import { setdata_tasks, setdata_subtasks,setdata_users } from './actions/action'

// const reducer =['tasks', 'subtasks','users']


// const mapDispatch = dispatch =>({
//     setdata_users:()=>dispatch (setdata_users()),
//     setdata_tasks:()=>dispatch (setdata_tasks()),
//     setdata_subtasks:()=>dispatch (setdata_subtasks())

// })
// const dispatchactions =['setdata_tasks', 'setdata_subtasks','setdata_users']
//  const buildDispatch=()=>{
//     let dispatcher=reduce (dispatchactions,(result, dispatchactions)=>{
//     const handlers= {
//         [`mapDispatch_${dispatchactions}`]: mapDispatch
//      }
//      result[dispatchactions]=(dispatch)=>{
//         (get(handlers,action.type,d=>d) )
//        return result }},{})
//        return dispatcher
//      }

// *******************************************************************************************
// 
// export function mapDispatchToProps(dispatch) {
 
//         return {
//                     // addtask: (data) => dispatch(addtask(data)),
//             setdata_tasks: (data) => dispatch({
//                 type: 'setdata_tasks',
//                 payload:data
//             })
            
//           ,
//             setdata_users: (data) => dispatch({
//                 type: 'setdata_users',
//                 payload: data
//             }
//             ),
//             setdata_subtasks: (data) => dispatch({
//                         type: 'setdata_subtasks',
//                         payload:data
//                     })
                   
//             }}
        