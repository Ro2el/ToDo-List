import { Modal, Button, Input } from 'antd';
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'
import ReactDOM from 'react-dom';
import { get, map, omit } from 'lodash'
import * as FieldJSON from './fields.json'
import * as Comp from './Components'
import { connect } from 'react-redux'
// import { setdata_subtasks, setdata_tasks} from './actions/action'
import { uuidv4 } from './users.js';
import {mapDispatchToProps}from './dispatcher'
import {apply} from './apply/index'
import { rec } from './apply/rec.js';
import {addDataToGun,FromGunToRedux} from './tasks_gun'
import'./flexLayout.css'




class Popup extends React.Component {
    constructor(props){
        super(props)
            FromGunToRedux(props.setdata,"subtasks")
        
    }

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (values) => {
        console.log(values)
        const { addsubtask } = this.props

        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };


    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onSubmit = (values) => {
        // console.log(values)
        // this.props.setdata("subtasks",{ ...values })
        addDataToGun("subtasks",{ ...values })

        let counter = apply(rec(this.props.task_select))
        
    }

    // *****************************************RENDER FIELDS ****************************************************
    renderfield2 = () => {

        return map(omit(FieldJSON.default, ["user"]), (value, key) => {
            const Component = get(Comp, value.type, Comp.Text)

            return (<Field name={value.name}>

                {({ field, form, meta }) => (
                    <div>
                        <Component key={key} {...{ field }} {...value}  />


                        <br /><br />
                    </div>
                )}

            </Field>)


        })

    }
    // **************************************************Form ******************************************************
    form = (props) => {

        return <Form onSubmit={props.handleSubmit}>
            {this.renderfield2()}
            <Button key="submit" htmlType="submit" type="primary" >
                Submit
            </Button>
        </Form>


    }


    render() {
        
        // console.log(counter,'ssssssssssssssssss')
        const { visible, loading } = this.state;
        return (
            <div className="popup">
                <div className="addsub">
                <button type="primary" onClick={this.showModal}>
                    Add Sub ToDO
                </button>
                </div>
                <Modal
                    title="Sub ToDo"
                    visible={this.state.visible}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Formik
                        initialValues={{ task_select:" ",title: " ", desc: " ", active: false }}
                        onSubmit={this.onSubmit}
                        render={this.form}


                    ></Formik>


                </Modal>


            </div>
        );
    }
}
// function mapDispatchToProps(dispatch) {

//     return {
//         setdata_subtasks: (data) => dispatch({
//             type: 'setdata_subtasks',
//             payload:data
//         })
       
// }}
export default connect(null, mapDispatchToProps)(Popup)