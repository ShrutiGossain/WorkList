import "./App.css";
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete.");
    // deleting this way in react wont work
    // let index= todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
      {
        sno: 1,
        job: "Go to the market",
        desc: "Go to the market to make the job done."
      },
      {
        sno: 2,
        job: "Go to the mall",
        desc: "Go to the mall to make the job done."
      },
      {
        sno: 3,
        job: "Go to the ghat",
        desc: "Go to the ghat to make the job done."
      }
    ]);

  return (
    <>
    <Header title="Todos List" searchBar = {true}/>
    <Todos todosProp = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}
export default App;
