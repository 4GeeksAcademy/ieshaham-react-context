import React, { useState, useContext, useEffect } from 'react';
import Todo from './Todo.jsx'

import { Context } from './Context.jsx'

export default function TodoContainer() {

    const { todoList, setTodoList } = useContext(Context);
    const [userInput, setUserInput] = useState("");

    const onChangeHandler = (event) => setUserInput(event.target.value);

    const removeTodo = (index) => {
        setTodoList((previosTodos) => previosTodos.filter((_, idx) => index !== idx))
    }

    const addTodoHandler = (event) => {

        if (event.key === 'Enter') {
            setTodoList([...todoList, userInput]);
            setUserInput("");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={userInput}
                    onChange={onChangeHandler}
                    onKeyUp={addTodoHandler}

                />
            </form>

            {todoList.map((todo, index) => <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />)}
        </div>
    )
}