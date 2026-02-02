import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskDeleted }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes. ¡Buen trabajo!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskDeleted={onTaskDeleted} />
        ))
      )}
    </div>
  );
};

export default TaskList;