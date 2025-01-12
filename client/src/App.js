import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    // if todos is empty, no todo is saved earlier.
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete.", todo);
    // deleting this way in react wont work
    // let index= todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onAddTodo = (job, desc) => {
    console.log("I am adding this new todo in the Todo list", job, desc);
    let sno;
    if(todos.length === 0) sno=0;
    else sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      job: job,
      desc: desc,
    };
    console.log(myTodo);

    setTodos([...todos, myTodo]);
    // localStorage.setItem("todos", JSON.stringify(todos)); // if todos is not defined
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
      <Header title="Todos List" searchBar={true} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={onAddTodo} />
              <Todos todosProp={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}
export default App;
