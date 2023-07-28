import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
// jsx
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Read a book" },
    { id: 2, text: "Shop for groceries" },
    { id: 3, text: "Meet John" },
  ]);
  // const ner = "Baigal";
  // let bool = false;

  // delete
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // add Task
  const addTask = (task) => {
    // console.log(task);
    const taskId = Math.floor(Math.random() * 100000);
    const newTask = { id: taskId, text: task };
    // console.log(newTask);
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      {/* <div className="App">{1 + 1}</div>
      <h2>{ner}</h2>
      <h1>{bool === true ? "True bna" : "False bna"}</h1> */}
      {/* <Card /> */}
      {/* <Home /> */}
      <Header />
      <AddTask onAdd={addTask} />
      <br />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
