import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{formProps.meta.error}</div>
      </div>
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValue) => {
  const errors = {};

  if (!formValue.title) {
    errors.title = "You must enter a title";
  }

  if (!formValue.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

//Field component doesn't render anything. its there to hook up the infastructure of reduxForm
