import React from "react";
import { Field, reduxForm } from "redux-form";



class StreamForm extends React.Component
{

    inputTemplate = ({ input, label, meta }) =>
    {
        return (
            <div>
                <label htmlFor={input.name}>{label}</label>
                <input type="text" id={input.name} {...input} />
                {(meta.touched && meta.error) ? <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div> : ""}
            </div>

        )
    }

    onSubmit = (formValues) =>
    {
        this.props.onSubmit(formValues)
    }

    render()
    {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" label="Enter Title" component={this.inputTemplate} />
                <Field name="description" label="Enter description" component={this.inputTemplate} />
                <br></br>
                <button className="ui button primary">submit</button>
            </form>
        )

    }

};


const validate = formData =>
{
    let error = {};
    if (!formData.title) error.title = "please provide title";
    if (!formData.description) error.description = "please provide description";

    return error;
}



export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);



