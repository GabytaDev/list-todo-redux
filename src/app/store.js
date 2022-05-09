import { configureStore } from '@reduxjs/toolkit';
//almacena el estado para q redux tenga un seguimiento de lo que esta pasando

import todoReducer from '../features/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  //name   
  },
});
