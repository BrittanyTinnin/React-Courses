import React, { Component } from "react";
import CourseDataService from "../service/CourseDataService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

class CourseComponent extends Component {
  //props - passed down to component
  //state - created and managed by component
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: "",
    };
  }

  componentDidMount() {
    console.log(this.state.id);

    if (this.state.id == -1) {
      return;
    }

    CourseDataService.retrieveCourse(
      CourseDataService.INSTRUCTOR,
      this.state.id
    ).then((response) =>
      this.setState({
        description: response.data.description,
      })
    );
  }

  onSubmit = (values) => {
    let username = CourseDataService.INSTRUCTOR;

    let course = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (this.state.id == -1) {
      CourseDataService.createCourse(username, course).then(() =>
        this.props.history.push("/courses")
      );
    } else {
      CourseDataService.updateCourse(username, this.state.id, course).then(() =>
        this.props.history.push("/courses")
      );
    }
    console.log(values);
  };

  validate = (values) => {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters in description";
    }
    return errors;
  };

  render() {
    let { description, id } = this.state;
    console.log(this.props);
    return (
      <div>
        <h3>Course</h3>
        <div className="container">
          <Formik
            initialValues={{ id, description }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset>
                  <label>Id</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="id"
                    disabled
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <Link to="/">
                    <button type="button" className="btn btn-primary">
                      Back
                    </button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default CourseComponent;
