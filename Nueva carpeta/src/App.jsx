import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para traer las tareas del servidor (Backend)
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error al traer tareas:", error);
    }
  };

  // Esto se ejecuta una sola vez cuando abre la app
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Gestor de Tareas - ForIT</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      <TaskList tasks={tasks} onTaskDeleted={fetchTasks} />
    </div>
  );
}

export default App;