import React, { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList/TaskList';
import TaskForm from './Components/TaskForm/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} onUpdate={updateTask} />
    </div>
  );
}

export default App;
