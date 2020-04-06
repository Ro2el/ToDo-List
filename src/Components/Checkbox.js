import React, { Component } from 'react'
import { Formik, Field, Form } from "formik";
export class Checkbox extends Component {
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
            <div className="active">
                <label style={{ width: "200 px" }}>{this.props.label}</label>

                <input
                    name={this.props.name}
                    type="checkbox"
                    onChange={(val) => this.handleChange(val)} />

            </div>


        )
    }
}

