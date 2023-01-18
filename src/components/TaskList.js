import React from "react";

function TaskList(task,deleteTask) {
  const taskData = tasks.map((task) => (
    <Task
      key ={task.id}
      text = {task.text}
      category ={task.category}
      onDeleteTask ={onDeleteTask}
    />))
  
  return (
    <div className="tasks">
      {taskData}
    </div>
  );
}

export default TaskList;
