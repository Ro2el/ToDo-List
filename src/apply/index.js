import store from '../store'
import * as RunFunctions from './main'
import {get } from 'lodash'

// console.log(RunFunctions,'HEEEEEEEEEEEEREEEEEEEE')
export const apply=(contentofJson,data={},state=store.getState(), props={})=>{
    const main_data=get(state,contentofJson.path, data)
    
    let selectedFunction=get(RunFunctions,contentofJson.key,(plan,data)=>data)
    let result = selectedFunction(contentofJson,main_data,state,{...props,apply:apply})
    if (contentofJson.then)
    return apply(contentofJson.then,result,state,props)
    return result
}
