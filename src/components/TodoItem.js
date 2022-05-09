import React from 'react'
import "./TodoItem.css"
import { useDispatch } from 'react-redux';
import {setCheck} from "../features/todoSlice";

const TodoItem = ({name, done, id}) => {
   const dispatch = useDispatch ();

  const handlecheck = ()=>{
    dispatch(setCheck(id))
  }

  return (
    <div className='todoItem'>
        <input type="checkbox" checked={done} onChange={handlecheck}></input>
        <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem;