import SearchBar from "./SearchBar";
import TodoItems from "./TodoItems";
import { useEffect, useState } from "react";
const TodoContainer = () => {
    const [todolist, setTodoList] = useState([]);

    //* handling Delete Todo 
    const handledeleteTodo = (id) => {
        const updatedTodoList = todolist.filter((item) => item.id != id);
        setTodoList(updatedTodoList);
    }

    //* handling check box on todo completion
    const handleCheckBox = (id) => {
        console.log(id);
        const completedItem = todolist.find((item) => item.id === id);
        console.log(completedItem.isCompleted);

        if (completedItem) {
            const updatedTodo = todolist.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item);

            setTodoList(updatedTodo);
        }

    }

    useEffect(() => {

        const storedTodoList = JSON.parse(localStorage.getItem("todolist"));
        if (storedTodoList) {
            setTodoList(storedTodoList);
        }
    }, [])

    // save todo item to local storage whenver the todolist state changes
    useEffect(() => {

        localStorage.setItem("todolist", JSON.stringify(todolist));
    }, [todolist])



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
                handleCheckBox={handleCheckBox}
                setTodoList={setTodoList}
            />

        </div>

    )
}
export default TodoContainer;