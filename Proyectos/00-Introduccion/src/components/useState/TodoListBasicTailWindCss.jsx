import { useState } from "react";
import { generateId } from "../../helpers/generateId.js";
import Task from "./Task.jsx";

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

    setNewTask((previous) => "");
    console.log(newTask);
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
      <div className="max-w mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
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
            <Task key={task.id} task={task} handleCompleted={handleCompleted} handleRemoveTask={handleRemoveTask} handleEditTask={handleEditTask} />
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
