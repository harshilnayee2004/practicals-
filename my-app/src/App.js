import React, { useState } from "react";

function App() {
  // Array 
  const [tasks, setTasks] = useState([
    { id: 1, text: "Study for exam", completed: false },
    { id: 2, text: "Drink water", completed: false },
    { id: 3, text: "Finish React project", completed: false },
  ]);


  const [filter, setFilter] = useState("all");


  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed === true;
    } else if (filter === "pending") {
      return task.completed === false;
    } else {
      return true;
    }
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>My To-Do List</h2>


      <div style={{ marginBottom: "20px" }}>
        <label>Filter: </label>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>


      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              width: "300px",
            }}
          >

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
            />


            <span
              style={{
                marginLeft: "10px",
                flexGrow: 1,
              }}
            >
              {task.text}
            </span>


            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
