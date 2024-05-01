import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskAssignment from './components/TaskAssignment';
import TaskStatusUpdates from './components/TaskStatusUpdates';
import TaskSummaryPage from './components/TaskSummaryPage';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const assignTask = (taskId, assignee) => {
    // Update task with assignee
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, assignee };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId, status) => {
    // Update task with status
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task List Application</h1>
      <TaskList tasks={tasks} addTask={addTask} />
      <TaskAssignment tasks={tasks} assignTask={assignTask} />
      <TaskStatusUpdates tasks={tasks} updateTaskStatus={updateTaskStatus} />
      <TaskSummaryPage tasks={tasks} />
    </div>
  );
}

export default App;
