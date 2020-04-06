import React, { Component } from 'react'
import { Formik, Field, Form } from "formik";
import { connect } from 'react-redux'
import { map } from 'lodash'

class task_select extends Component{
    handleChange = (value) => {
        const { field } = this.props
        field.onChange({
            target: {
                name: field.name,
                value: value.target.value
            }
        })
    }
    render() {


        const { tasks, field } = this.props
      
        return (
            <div>
                <label style={{ width: "100 px" }}>{this.props.label}</label>
                <select
                    value={field.value}
                    onChange={(val) => this.handleChange(val)}
                    name={this.props.name}
                >
                    {map(tasks, (val, key) => {
                        return <option key={key} title={val.title}
                            value={key}>{val.title}  </option>
                    })}
                </select>
            </div>


        )
    }
}
const mapStateToProps = (state)=>({
    tasks: state.tasks.data
}
)
export const Task_select =  connect(mapStateToProps)(task_select)
