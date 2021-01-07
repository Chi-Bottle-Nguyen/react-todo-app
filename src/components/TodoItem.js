import React from 'react';
const TodoItem = ({todo, index, completeTodo, deleteTask}) => {    
    return(
        <div className="todo-item"style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
            {todo.task}
            <div>
            <button className="bluebutt" onClick={() => completeTodo(index)}>Done</button>
            <button className="bluebutt" onClick={() => deleteTask(index)}>X</button>
            </div>
        </div>
    )
}

export default TodoItem