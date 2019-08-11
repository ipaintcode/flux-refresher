import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import FourOFour from "./FourOFour";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses/" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={FourOFour} />
      </Switch>
    </div>
  );
}

export default App;
