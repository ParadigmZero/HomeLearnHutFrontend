import Post from "./Post";
import css from "./Feed.module.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseAppContext } from "../../appContext";
import * as actions from "../../libs/actions";

const Feed = () => {
  const history = useHistory();
  const { state, dispatch } = UseAppContext();

  const [hideOnScroll, setHideOnScroll] = useState(true);

  function goToClassroom(index) {
    dispatch({ type: actions.HOMEWORK_CHANGE, payload: index });
    history.push("/classroom");
  }

  let homeworkList = state.homework;
  console.log(homeworkList);



  return (
    <div>

      <ul className={css.post}>

        {homeworkList
          .map((homework, index) => [
            <li key={index}>

              <Post
                homework={homework}
                index={index}
                clickToClassroom={goToClassroom}
              />
            </li>,
          ])
          .reverse()}
      </ul>

    </div>
  );
};

export default Feed;
