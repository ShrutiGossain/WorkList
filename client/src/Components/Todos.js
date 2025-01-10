import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      {/* {props.todosObject} */}
      {/* <TodoItem todo={props.todosProp[0]}/> */}
      {props.todosProp.map((todoVariables)=>{
        return <TodoItem todo = {todoVariables} key= {todoVariables.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}