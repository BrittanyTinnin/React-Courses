import React, { Component } from "react";
import ListCoursesComponent from "./ListCoursesComponent";
import { Router, Route, Switch } from "react-router-dom";
import CourseComponent from "./CourseComponent";
import history from "../history";

class InstructorApp extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <h1>Instructor Application</h1>
          <Switch>
            <Route path="/" exact component={ListCoursesComponent} />
            <Route path="/courses" exact component={ListCoursesComponent} />
            <Route path="/courses/:id" component={CourseComponent} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default InstructorApp;
