import React from 'react';

const TaskItem = ({ task, onTaskDeleted }) => {
  const deleteBtn = async () => {
    await fetch(`http://localhost:5000/api/tasks/${task.id}`, { method: 'DELETE' });
    onTaskDeleted(); // Refresca la lista
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={deleteBtn} style={{ color: 'red' }}>Eliminar</button>
    </div>
  );
};

export default TaskItem;