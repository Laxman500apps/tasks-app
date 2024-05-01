import React, { useState } from 'react';

const TaskList = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask({ id: tasks.length + 1, title: newTask, assignee: '', status: 'pending' });
      setNewTask('');
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter task" />
      <button onClick={handleAddTask}>Add Task</button>
      {/* Display list of tasks */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
