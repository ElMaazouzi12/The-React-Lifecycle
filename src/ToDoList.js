import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ToDoList() {
    const [todos, setTodo] = useState();
    // componentDidMount
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodo(responseTodos)
        });
    }, [])
    


  return (
    <div>
        <h3> Todo List </h3>
        {todos && todos.map(todo => {
            const { id, userId, title } = todo;
            return (
                <div key={id}>
                    <h5> {title} </h5>
                    <h5> Assigned to user: {userId} </h5>
                </div>
            )
        })}
    </div>
  )
}
