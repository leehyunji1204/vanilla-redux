import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteTodo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

/*user createReducer*/
/*const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});*/

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
