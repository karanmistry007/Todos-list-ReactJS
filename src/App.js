import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./MyComponents/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("Delete", todo);
    // this method does not work in react
    // let index =todos.index(todo);
    // todos.splice(index,1)

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);
    var sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos.length + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar title="Todos List" Searchbar={true} />
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <Todos todos={todos} onDelete={onDelete} addTodo={addTodo} />
            }
          ></Route>
          <Route exact path={"/about"} element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
