import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Bonus allocation workers", completed: false },
    { id: 2, task: "To manage posting request", completed: true },
    { id: 3, task: "To report weekend status to Director" , completed: false },
    { id: 4, task: "To conduct meeting on work environment", completed: false },
    { id: 5, task: "To check leave schedule of workers", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='cat'>
      <h2  style={{color:"black"}}>To do List</h2>
      <table style={{ borderCollapse: 'collapse', width: '80%', margin: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Task</th>
            <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{task.task}</td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  backgroundColor: task.completed ? 'lightgreen' : 'red',
                  color: task.completed ? 'green' : 'black',
                }}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? 'Completed' : 'Incomplete'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;