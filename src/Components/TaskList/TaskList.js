import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleCompletion = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task ${completedTasks.includes(task.id) ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={completedTasks.includes(task.id)}
            onChange={() => toggleCompletion(task.id)}
          />
          <span className="task-text">{task.text}</span>
          <button onClick={() => {
            toggleCompletion(task.id);
            onDelete(task.id);
          }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
