import { useContext, useEffect } from "react"
import { todoStates } from "./contexts/TodoContext"
import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";

function App() {
  const todoData = useContext(todoStates);

  useEffect(() => {
    console.log(todoData.todos)
  }, [todoData.todos]);


  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todoData.todos.map((todo) =>
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
