import React, { Component } from 'react'
import { Formik, Field, Form } from "formik";
export class Textarea extends Component {
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

        return (
            <div className="desc">
                <label style={{ width: "100 px" }} >{this.props.label}</label>

                <textarea
                    name={this.props.name}
                    onChange={(val) => this.handleChange(val)}
                />

            </div>


        )
    }
}
