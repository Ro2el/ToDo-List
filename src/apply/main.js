// import React, { Component } from 'react'
// import * as RECJSON from './rec'
import { filter,size } from 'lodash'

export const filtering = (params, data, state, props) => {
      return filter(data, params.params)
    
}

export const count = (params, filteredSubTasks, state, props) => {
    return size(filteredSubTasks)
}

