import SearchBar from "./SearchBar";
import TodoItems from "./TodoItems";
import { useState } from "react";
const TodoContainer = () => {
    const [todolist, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const [editableItem, setEditableItem] = useState(null);
    const [editText, seteditText] = useState(todo);
   
   
    const handledeleteTodo = (id) => {
        const updatedTodoList = todolist.filter((item) => item.id != id);
        setTodoList(updatedTodoList);
    }

    const handleEditTodo = (id, newText) => {
        console.log(id,newText);

        const updatedTodo = todolist.map((todo) => todo.id === id ? {...todo, text: newText, } : todo);
        setTodoList(updatedTodo);
        setEditableItem(null);
        // seteditText("");
    }


    return (
        <div className="todo_container">
            <div className="todo_list_heading">
                <h2>What's Your Plan For Today?</h2>
            </div>
            <SearchBar
                state={todolist}
                setstate={setTodoList}
                todo={todo}
                setTodo={setTodo}
            />

            <TodoItems
                todolist={todolist}
                deleteTodo={handledeleteTodo}
                editableTodo={editableItem}
                setEditableTodo={setEditableItem}
                saveTodo={handleEditTodo}
                editText={editText}
                seteditText={seteditText}
            />

        </div>

    )
}
export default TodoContainer;