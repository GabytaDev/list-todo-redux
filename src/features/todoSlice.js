import { createSlice } from '@reduxjs/toolkit'

//definir los estados globales

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action)=>{
        console.log(action.payload)
     state.todoList.push(action.payload)
                        //acion de carga        
    },

    setCheck: (state,action)=>{
      state.todoList.map(item => {
        if(action.payload === item.id){
          if(item.done === true){
            item.done = false
          } else{
            item.done = true
          }
        }
      })
    }

  }
});

export const {saveTodo, setCheck} = todoSlice.actions 

export const selecTodoList = state => state.todos.todoList

export default todoSlice.reducer //se exporta a la store como todoReducer