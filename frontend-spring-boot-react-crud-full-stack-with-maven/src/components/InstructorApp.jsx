import React, { Component } from "react";
import ListCoursesComponent from "./ListCoursesComponent";

class InstructorApp extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>Instructor Application</h1>
          <Switch>
            <ListCoursesComponent />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default InstructorApp;
