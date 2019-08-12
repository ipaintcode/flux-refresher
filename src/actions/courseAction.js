import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // Hey dispatcher, go tell all the stores a course was just created.
    dispatcher.dispatch({
      actionType: actionType.CREATE_COURSE,
      course: savedCourse
    });
  });
}
