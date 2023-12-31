import { useState } from "react";
const TodoItems = ({ todolist, setTodoList, deleteTodo, handleCheckBox }) => {

    const [editableItem, setEditableItem] = useState(null);
    const [editText, seteditText] = useState("");

    //* handling edit todo
    const handleEditTodo = (id, newText) => {
        const updatedTodo = todolist.map((todo) => todo.id === id ? { ...todo, text: newText, } : todo);
        setTodoList(updatedTodo);
        setEditableItem(null);
        seteditText("");
    }

    return (
        <div className="todo_items_container">
            {
                todolist.map((item) => {
                    // console.log(item.isEditable.editable);
                    if (item) {
                        return (editableItem === item.id) ? (
                            <div className=" todo_items todo_edit_items" key={item.id}>
                                <input
                                    type="text"
                                    placeholder="Edit Plan .............."
                                    value={editText}
                                    onChange={(e) => seteditText(e.target.value)}

                                />
                                <div className="icon_container icon_edit_items">
                                    <span>
                                        <i className="fa-solid fa-floppy-disk" title="Save"
                                            onClick={
                                                () =>
                                                    handleEditTodo(item.id, editText)
                                            }

                                        >

                                        </i>
                                    </span>
                                </div>
                            </div>

                        )

                            : (
                                <div className="todo_items" key={item.id}>
                                    <input type="checkbox" onClick={() => handleCheckBox(item.id)} />
                                    <p className={(item.isCompleted) ? "completed-text" : ""}>{item.text}</p>
                                    <div className="icon_container">
                                        {/* edit item logo */}
                                        <span>
                                            <i className="fa-regular fa-pen-to-square " title="Edit"
                                                onClick={
                                                    () => {
                                                        setEditableItem(item.id);
                                                        seteditText(item.text);
                                                    }
                                                }>
                                            </i>
                                        </span>

                                        {/* delete item logo */}
                                        <span>
                                            <i className="fa-solid fa-trash" title="Delete"
                                                onClick={() => deleteTodo(item.id)}>
                                            </i>
                                        </span>
                                    </div>

                                </div>
                            )

                    }
                    else {
                        console.log("no item")
                    }

                })}

        </div >
    )
}

export default TodoItems;