/*
A Particular piece of homework and all the students involved viewable at a glance
For a particular piece of homework, this displays all the students who it is assigned to.
Each student could be a component, which contains, their name, their avatar and whether they have:
a) not submitted the homework ( e.g.  a cross icon)
b) submitted the homework but is has not been reviwed by teacher ( e.g. a file sheet icon )
c) submitted the homework and it has been approved ( e.g. a tick icon )
*/

import React from "react";
import Student from "./Student";
import css from "../MyClassroom/MyClassroom.module.css";
import cx from "classnames";

function MyClassroom({ homeworkTitle, studentClick, children, backClick }) {

  return (
    <>
      <h1 className={css.pageTitle}>My Classroom - {homeworkTitle}</h1>
      <div className={css.childContain}>
        <ul className={css.myClassroom}>
          {children.map((child, index) => [
            <li
              className={
                child.individualHomeworkImage !== null
                  ? css.listElement
                  : css.listElementDisabled
              }
              title={
                child.individualHomeworkImage !== null
                  ? ""
                  : "No work submitted"
              }
            >
              <Student
                key={index}
                handleClick={() => studentClick(index)}
                name={child.name}
                avatar={child.avatar}
                hasSubmitted={child.individualHomeworkImage !== null} // added prop for tickbox functionality
                isMarked={child.annotation !== null}
              />
            </li>,
          ])}
        </ul>
        <br />
      </div>
      <button className={css.goBack} onClick={backClick}>
        Back
      </button>
    </>
  );
}

export default MyClassroom;
