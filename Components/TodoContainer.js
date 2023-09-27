import SearchBar from "./SearchBar";
import TodoItems from "./TodoItems";
import { useState } from "react";
const TodoContainer = () => {
    const [todolist, setTodoList] = useState([]);

    const handledeleteTodo = (id) => {
        const updatedTodoList = todolist.filter((item) => item.id != id);
        setTodoList(updatedTodoList);
    }
    return (
        <div className="todo_container">
            <div className="todo_list_heading">
                <h2>What's Your Plan For Today?</h2>
            </div>
            <SearchBar
                state={todolist}
                setstate={setTodoList}
            />

            <TodoItems 
            todolist={todolist} 
            deleteTodo={handledeleteTodo}
            />

        </div>

    )
}
export default TodoContainer;