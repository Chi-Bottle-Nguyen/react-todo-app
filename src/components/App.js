import React, {useState} from 'react';
import TodoItem from './TodoItem';
import NewTask from './NewTask';


const App = () => {
    const holder = [{task: "Learn React", isCompleted: false},
    {task: "Learn CSS", isCompleted: false},
    {task: "Read a book", isCompleted: false}]

    const [todos, setTodos] = useState(holder)

    const addTodos = (value) => {
        setTodos(todos.concat({
            task: value,
            isCompleted: false
        }))
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !todos[index].isCompleted;
        setTodos(newTodos)
        console.log(index)
    }

    const deleteTask = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos);
    }
 
    return(
        <div>
        <div className="todo-area">
            <h1 className="todo-title"><i>What to do</i></h1>
            {todos.map((todo, index) => <TodoItem 
            todo={todo} 
            key={index}
            index={index}
            completeTodo={completeTodo}
            deleteTask={deleteTask} />)}
        </div>
        <NewTask addTodos={addTodos}/>
        </div>
    )
}

export default App