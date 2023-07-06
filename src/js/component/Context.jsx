import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const API_URL = 'https://assets.breatheco.de/apis/fake/todos/user/elvis'

export default function ContextProvider(props) {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {

        console.log('In the Context useEffect');
        fetchTodosOrInitializeTodos();
    }, []);

    const addTodos = async () => {

        const yourTodos = [
            {
                label: "test todo",
                done: false
            }
        ];
        // updating the todos
        const response = await fetch(API_URL, {
            method: 'put',
            body: JSON.stringify(yourTodos), // replace <yourTodos> with your own todos
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json())
    }

    const fetchTodosOrInitializeTodos = async () => {
        try {
            // fetching the todos
            const getResponse = await fetch(API_URL);
            console.log(`getResponse: `, getResponse);

            if (getResponse.status === 404) {
                // creating/initializing the todos
                const createResponse = await fetch(API_URL, {
                    method: 'post',
                    body: JSON.stringify([]),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => res.json());

                console.log(`create response: `, createResponse)
            }
            else {

                const data = await getResponse.json();

                setTodoList(data);
            }

        }
        catch (error) {
            console.log('In the catch block', error);
        }
    }


    return (
        <Context.Provider value={{ todoList, setTodoList }}>
            {props.children}
        </Context.Provider>
    )
}