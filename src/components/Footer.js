import React from "react";
import { withRouter } from "react-router-dom";

const renderCounter = numberOfTodos => {
  return numberOfTodos.length === 0 ? (
    ""
  ) : (
    <p className="todo-counter-text">
      {numberOfTodos === 1 ? `${numberOfTodos} item` : `${numberOfTodos} items`}{" "}
      left
    </p>
  );
};

const numberOfTodos = allTodos => {
  const numberOfTodos = allTodos.filter(item => item.completed === false)
    .length;
  return renderCounter(numberOfTodos);
};

const renderClearCompleted = (all, clear_completed) =>
  all.filter(item => item.completed === false).length ? (
    <button className="buttons" onClick={() => clear_completed()}>
      Clear completed
    </button>
  ) : null;

const Footer = withRouter(
  ({
    history,
    setViewAll,
    setViewActive,
    setViewCompleted,
    clear_completed,
    allTodos
  }) => {
    if (allTodos.length === 0) {
      return "";
    } else {
      return (
        <div className="footer">
          <div className="todo-counter-container">
            {numberOfTodos(allTodos)}
          </div>
          <div className="primary-buttons">
            <button className="buttons" onClick={() => setViewAll(history)}>
              All
            </button>
            <button className="buttons" onClick={() => setViewActive(history)}>
              Active
            </button>
            <button className="buttons" onClick={() => setViewCompleted(history)}>
              Completed
            </button>
          </div>
          <div className="clear-all-button-container">
            {renderClearCompleted(allTodos, clear_completed)}
          </div>
        </div>
      );
    }
  }
);

export default Footer;
