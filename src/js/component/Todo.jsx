import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Todo(props) {
    const { todo, removeTodo, index } = props;
    const [showDelete, setShowDelete] = useState(false);

    return (
        <Link to={`/todo/${index}`}>
            <div 
                onMouseEnter={() => setShowDelete(true)} 
                onMouseLeave={() => setShowDelete(false)}
            >
                <p>{todo.label}</p>

                {showDelete && (
                    <p onClick={() => removeTodo(index)}>Delete Icon</p>
                )}

            </div>
        </Link>
    )
}