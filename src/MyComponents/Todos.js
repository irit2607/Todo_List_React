import React from 'react'
import { TodosItem } from "../MyComponents/TodosItem";

export const Todos = (props) => {
  let mystyle = {
    minHieght: '70vh',
    margin: "10px auto",
    paddingTop: '30px',
    color: '#00ffff',
    fontFamily:'sans-serif',
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className="my-2">Todo List</h3><hr/>
      {props.todos.length === 0 ? "No todos" :
        props.todos.map((todo) => {
          return <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

            })
      }
     
    </div >
  )
}

export default Todos
