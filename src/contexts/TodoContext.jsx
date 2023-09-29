import React, { createContext, useState, useEffect } from 'react';


const todoStates = createContext({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { }
})

const TodoContext = (props) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        let data = {
            id: Date.now(),
            title: title,
            status: false
        }
        setTodos((pre) => [data, ...pre])
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const updateTodo = (id, title, status) => {
        let data = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    id: todo.id,
                    title: title,
                    status: status
                };
            } else {
                return todo
            }
        })
        setTodos(data);
    }

    const deleteTodo = (id) => {
        let data = todos.filter((todo) => {
            if (todo.id != id) {
                return {
                    id: todo.id,
                    title: todo.title,
                    status: todo.status
                }
            }
        })

        setTodos(data);
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("todos"));
        if (data && data.length > 0) {
            setTodos(data);
        }
        console.log(data);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
        <todoStates.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            {props.children}
        </todoStates.Provider>
    );
}

export default TodoContext;
export { todoStates };