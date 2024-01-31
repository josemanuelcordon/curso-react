import { useState } from "react"
import { TodoContext } from "./TodoContext"

const initialState = [
    {id:1,
    nombre: "Sacar el perro", 
    completado: false},
    {id:2,
    nombre: "Aprender React", 
    completado: false}
]

const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialState);
  return (
    <TodoContext.Provider value={{tasks, setTasks}}>
        <>
        {children}
        </>
    </TodoContext.Provider>
  )
}

export default TodoProvider