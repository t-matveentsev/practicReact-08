import { createSelector } from "@reduxjs/toolkit";

// todos
export const selectTodos = (state) => state.todos.item;

// filter
export const selectFilter = (state) => state.filter.filter;
export const selectStatus = (state) => state.filter.status;

//auth
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectVisibilityTaskByStatusMemo = createSelector(
  [selectStatus, selectTodos],
  (taskStatus, todos) => {
    switch (taskStatus) {
      case "active":
        return todos.filter((item) => !item.completed);
      case "completed":
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  }
);

export const selectUncompletedTodosMemo = createSelector(
  [selectTodos],
  (todos) => {
    return todos.reduce(
      (total, curr) => (curr.completed ? total : total + 1),
      0
    );
  }
);
