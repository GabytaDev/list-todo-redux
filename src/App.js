import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import {useSelector} from "react-redux";
import {selecTodoList} from "./features/todoSlice";

// const todoList = [{
//   item: "todo",
//   done: false,
//   id: 9979786
// },
// {
//   item: "todo2",
//   done: true,
//   id: 65978
// }
// ]

function App() {

  const todoList = useSelector(selecTodoList)

  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map((item)=>{
            return(
              <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
              />
            )
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
