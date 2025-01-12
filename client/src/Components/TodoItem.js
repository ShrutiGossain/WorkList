import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div style={{maxWidth: '800px', minHeight: '20vh'}}>
      <h4 className="my-3">{todo.job}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  )
}