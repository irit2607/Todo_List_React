import React from 'react'

export const TodosItem = ({todo, onDelete, oncheck}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
       <button className="btn btn-sm btn-danger" onClick = {()=>{onDelete(todo)}}>Delete</button> &emsp;
       <input type="checkbox" style={{width:'20px', height: '20px'}} ></input>
    </div>
    <hr/>
    </>
  )
}

export default TodosItem
