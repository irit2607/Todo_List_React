import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import { About } from "./MyComponents/About";
import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  document.body.style.backgroundColor = "black"

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("addtodooo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title="TODO LIST" searchbar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

