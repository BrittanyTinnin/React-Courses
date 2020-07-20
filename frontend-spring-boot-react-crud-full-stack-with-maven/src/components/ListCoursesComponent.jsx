import React, { Component } from "react";
import CourseDataService from "../service/CourseDataService";

class ListCoursesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      message: null,
    };
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses = () => {
    CourseDataService.retrieveAllCourses(CourseDataService.INSTRUCTOR) //Hardcoded
      .then((response) => {
        console.log(response);
        this.setState({ courses: response.data });
      });
  };

  deleteCourseClicked = (id) => {
    CourseDataService.deleteCourse(CourseDataService.INSTRUCTOR, id).then(
      (response) => {
        console.log(response);
        this.setState({ message: `Delete of course ${id} Successful` });
        this.refreshCourses();
      }
    );
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>All Courses</h3>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.description}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteCourseClicked(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCoursesComponent;
