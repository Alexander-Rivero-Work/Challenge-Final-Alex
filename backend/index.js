const express = require('express'); // Traemos la herramienta Express 
const cors = require('cors');
require('dotenv').config(); // Configuramos variables de entorno 

const app = express();
const PORT = process.env.PORT || 5000; // El puerto donde vivirá el servidor 

// Middleware
app.use(cors());
app.use(express.json()); // Esto permite que el servidor entienda formato JSON

// Base de datos temporal (en memoria) según pide el PDF [cite: 20]
let tasks = [
  { id: '1', title: 'Mi primera tarea', description: 'Lograr el challenge', completed: false, createdAt: new Date() }
];

// --- ENDPOINTS (Las "puertas" de tu servidor) ---

// 1. Obtener todas las tareas [cite: 15]
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// 2. Crear una nueva tarea [cite: 16]
app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: Date.now().toString(), // Generamos un ID simple [cite: 32]
    ...req.body,
    createdAt: new Date() // [cite: 35]
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3. Eliminar una tarea [cite: 19]
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});