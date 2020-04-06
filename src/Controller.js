import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { createUser } from './users'
import * as FieldJSON from './fields.json'
import * as Comp from './Components'
import { get, map, omit } from 'lodash'
import { connect } from 'react-redux'
import Popup from './Popup'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import ColumnGroup from 'antd/lib/table/ColumnGroup'
// import { setdata_tasks, setdata_subtasks, setdata_users } from './actions/action'
import { mapDispatchToProps } from './dispatcher'
import { apply } from './apply'
import { rec } from './apply/rec'
// import { testgun } from './testgun'
import { addDataToGun, FromGunToRedux, testgun } from './tasks_gun'

import DataList from './dataList'
import'./flexLayout.css'
//  import {recursionPlan}from './dataList'


// import { recursion2 } from './recursion2/index'
// import { recursion } from './recursion2/recursion'
class Controller extends Component {
    constructor(props) {
        super(props)
        props.setdata('users', { title: 'Esraa', id: 'aaaaaaaaaaaa' })

        props.setdata('users', { title: 'Ahmed', id: 'bbbbbbbbbb' })

        props.setdata('users', { title: 'Youssef', id: 'ccccccccccccc' })
        // const usersname = ['Es R AA', 'Ah M ED', 'YO SS EF']
        // props.setdata("users", usersname)
        // map(usersname, (name) => {
        //     props.setdata("users", { name })
        // })
        testgun()

        FromGunToRedux(props.setdata, "tasks")
    }



    onSubmit = (values) => {
        // const{setdata}=this.props
        // setdata:
        // console.log(values,)

        // this.props.setdata("tasks", { ...values })
        addDataToGun("tasks", { ...values })
    }

    //   -**************************************************************************************-


    renderfield = () => {

        return map(omit(FieldJSON.default, ["task_select"]), (value, key) => {
            const Component = get(Comp, value.type, Comp.Select)
            return (<Field name={value.name}>

                {({ field, form, meta }) => (
                    <div >
                        <Component key={key} {...{ field }} {...value} />


                        <br /><br />
                    </div>
                )}

            </Field>)


        })

    }

    form = (props) => {

        return <Form onSubmit={props.handleSubmit} className="container">
            <>
                
                {this.renderfield()}
                <div className="addtask" >
                    <button type="submit">Add ToDo</button>
                    <Popup />


                </div>
            </>
        </Form>


    }
    render() {
        const { users } = this.props

        return (
            <>
            <div className="header">
                <h1 style={{ color: "red" }}> ToDos</h1>
                </div>
                <Formik
                    initialValues={{ user: "", title: " ", desc: " ", active: false }}
                    onSubmit={this.onSubmit}
                    render={this.form}



                ></Formik>
                 <DataList />


                {/* <ul>
                    {map(this.props.tasks, (value, key) => {
                        const filter = {
                            "key": "filtering",
                            "path": "subtasks.data",
                            "params": {
                                task_select: key,
                            }
                        }
                        const sublist = map(apply(filter), (value, key) => <li>{value.title}</li>)
                        return (
                            <div>

                                <li>{value.title} {apply(rec(key))}</li>
                                <ul>{sublist}</ul>
                            </div>)
                    })}

                </ul> */}
            </>
        );

    }
}


function mapStateToProps(state) {

    return {
        users: state.users.data,
        tasks: state.tasks.data,
        subtask: state.subtasks.data
    }
}

// function mapDispatchToProps(dispatch) {

//     return {
//                 // addtask: (data) => dispatch(addtask(data)),
//     setdata_tasks: (data) => dispatch({
//         type: 'setdata_tasks',
//         payload:data
//     })

//   ,
//     setdata_users: (data) => dispatch({
//         type: 'setdata_users',
//         payload: data
//     }
//     )
// }


// addsubtask: (data)=>dispatch(addsubtask(data))
// }}

export default connect(mapStateToProps, mapDispatchToProps)(Controller)
