import React, { useState } from 'react';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTask = { title, description, completed: false };

    await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });

    // Limpiamos los campos y avisamos a App.jsx que refresque la lista
    setTitle('');
    setDescription('');
    onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
      <input 
        type="text" 
        placeholder="Título de la tarea" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Descripción" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit" style={{ background: 'green', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;