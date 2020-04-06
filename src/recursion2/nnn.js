// import React ,{Component} from 'react'
// import DataList from './dataList'
 
// class Recursion extends Component {

// render(){
//     const { reduxState, plan, parentID } = this.props
//         let children = get(reduxState, plan.path, {})
//     return(
// <>
// <a 
//                 onClick={() => this.setState({[child.id]: !this.state[child.id]})}
//                 style={{color: this.state[child.id] ? 'red' : 'blue'}}
//               >
//                 <li key={child.id}>{child.title}</li>
//               </a>

//               {
//               plan.then && this.state[child.id] && 
//                 <DataList reduxState={reduxState} plan={plan.then} parentID={child.id} /> }
//            </>

//     )
// }}









/* // export const recursionPlan=()=>({ */
/* //     path:'users.data',
//     then:{ */
//         path:'tasks.data',
//         filterkey:'user',
//         then:{
//             path:'subtasks.data',
//             filterkey:'task_select'
//         }
//     }
// })




// export const display={
//     key:"users",
//     filterBy:"display",

//     subData:{
//         key:"tasks",
//         filterBy:"id",
//     subData:{
//         key:"subtasks",
//         filterBy:"task_select"
//     }
//     }

// }





// export const recursion = (userid,taskid,subtaskid)=>({
//     "key":"disply_user",
//     "path":"users.data",
//     "params":{
//         id: userid,
//     },
//     then:{
//         "key":'diply_task',
//         "path": 'tasks.data',
//         "params":{
//             uuid:taskid
//         }


        
//     },
//     then:{
//         "key":'diply_subtask',
//         "path": 'subtasks.data',
//         "params":{
//             uuid:subtaskid

//         }
//     }
// })