export const rec = (taskid)=>({
    "key":"filtering",
    "path":"subtasks.data",
    "params":{
        task_select: taskid,
    },
    then:{
        'key':'count',
        count_key: '',
        start:0
    }
})