const Task = ({task, handleCompleted, handleRemoveTask, handleEditTask}) => {
  return (
    <li key={task.id} className="flex items-center justify-between rounded-md p-2 mb2 border-solid border-2 border-sky-500 mb-4 bg-blue-200">
        <div>
              <input
                type="checkbox"
                checked={task.completed}
                className="mr-4"
                onChange={() => handleCompleted(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              </div>
              <div>
              <button
                className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md mr-4"
                onClick={() => handleRemoveTask(task.id)}
              >
                Borrar Tarea
              </button>
              <button
                className="ml-auto bg-yellow-500 text-white px-3 py-1 rounded-md"
                onClick={() => handleEditTask(task.id)}
              >
                Editar Tarea
              </button>
              </div>
            </li>
  );
}

export default Task;