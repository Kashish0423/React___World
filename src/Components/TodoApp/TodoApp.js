import React from "react";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.css";
import cx from "classnames";

const TodoApp = () => {
  return (
    <div className={cx(styles.todoApp, styles.body)}>
      <TodoList />
    </div>
  );
};

export default TodoApp;
