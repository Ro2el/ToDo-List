export const setdata_tasks = (data) => {
    return {
        type: 'setdata_tasks',
        payload: data
    }
}
export const set_active_task = (id) => {
    return {
        type: 'set_active_task',
        payload: id
    }
}
export const setdata_subtasks = (data) => {
    return {
        type: 'setdata_subtasks',
        payload: data
        
    }
}
 export const setdata_users =(data)=> {
   
     return {
         type: 'setdata_users',
         payload: (data)
     }
 }