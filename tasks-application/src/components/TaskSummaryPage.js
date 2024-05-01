import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TaskSummaryPage = ({ tasks }) => {
  // Calculate task metrics (e.g., total tasks, completed tasks, etc.)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;

  // Data for the bar chart
  const data = [
    { name: 'Total Tasks', value: totalTasks },
    { name: 'Completed Tasks', value: completedTasks }
  ];

  return (
    <div className="task-summary-page">
      <h2>Task Summary Page</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      {/* Bar chart */}
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TaskSummaryPage;
