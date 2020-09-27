import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError = (formProps) => {
    if (formProps.meta.touched && formProps.meta.error) {
      return (
        <div className='ui error message'>
          <div className='header'>{formProps.meta.error}</div>
        </div>
      );
    }
  };

  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete='off' />
        {this.renderError(formProps)}
      </div>
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValue) => {
  const errors = {};

  if (!formValue.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValue.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);

//Field component doesn't render anything. its there to hook up the infastructure of reduxForm
