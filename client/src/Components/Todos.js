import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {maxWidth: '800px', minHeight: '90vh'}

  return (
    <div className="container my-5" style={myStyle}  >
      <h3>Todos List</h3>
      {/* {props.todosObject} */}
      {/* <TodoItem todo={props.todosProp[0]}/> */}
      {props.todosProp.length === 0 ? "No todos to display." :
      props.todosProp.map((todoVariables)=>{
        return (
        <>
        <TodoItem todo = {todoVariables} key= {todoVariables.sno} onDelete={props.onDelete}/>
        <hr></hr>
        </>
        )
      })}
    </div>
  )
}