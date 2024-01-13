import { useState } from "react";
import { generateId } from "../helpers/generateId";

const initialState = [
  {
    id: 1,
    title: "Comprar leche",
    completed: false,
  },
  {
    id: 2,
    title: "Comprar huevos",
    completed: true,
  },
  {
    id: 3,
    title: "Estudiar React",
    completed: false,
  },
];


// ... (código anterior)

// ... (código anterior)

const TodoListBasicTailWindCss = () => {
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState(""); // Nuevo estado para la tarea editada

  function handleAddTask() {
    if (newTask === "" && editedTask === "") {
      alert("Please should write in the input");
      return false;
    }

    if (editingTask && editingTask.id) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, title: editedTask } : task
      );

      setTasks(updatedTasks);
      setEditingTask(null);
      setEditedTask(""); // Limpiamos el estado de texto editado
    } else {
      const objTask = {
        id: generateId(),
        title: newTask,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, objTask]);
    }

    setNewTask("");
  }

  function handleCompleted(taskId) {
    const updateTask = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updateTask);
  }

  function handleEditTask(taskId) {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
    setEditedTask(taskToEdit.title); // Inicializar el estado de la tarea editada con el título actual
  }

  // Manejar el cambio de texto solo cuando se edita la tarea
  function handleChangeEditedTask(e) {
    setEditedTask(e.target.value);
  }

  function handleRemoveTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
        <h1 className="text-2xl mb-4 font-bold">Lista de Tareas</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Nueva Tarea"
            className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-600"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            onClick={handleAddTask}
          >
            {editingTask !== null ? "Editar Tarea" : "Agregar Tarea"}
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb2">
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
              <button
                className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md mb-2"
                onClick={() => handleRemoveTask(task.id)}
              >
                Borrar Tarea
              </button>
              <button
                className="ml-auto bg-yellow-500 text-white px-3 py-1 rounded-md mb-2"
                onClick={() => handleEditTask(task.id)}
              >
                Editar Tarea
              </button>
            </li>
          ))}
        </ul>
        {/* Mostrar el input solo si estamos editando una tarea */}
        {editingTask !== null && (
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Editar Tarea"
              className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-600"
              onChange={handleChangeEditedTask} // Llamar directamente a la función de cambio
              value={editedTask}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={handleAddTask}
            >
              Guardar Cambios
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoListBasicTailWindCss;
