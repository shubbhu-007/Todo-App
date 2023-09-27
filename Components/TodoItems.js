const TodoItems = ({ todolist,deleteTodo}) => {
    console.log(todolist);
    console.log(deleteTodo);
    return (
        <div className="todo_items_container">
            {
                todolist.map((item) => {
                    return (
                        <div className="todo_items" key={item.id}>
                            <p>{item.text}</p>
                            <div className="icon_container">
                            <span><i className="fa-regular fa-pen-to-square" onClick={() => console.log("edit called")}></i></span>
                            <span>
                                <i className="fa-solid fa-trash" 
                                    onClick={() => deleteTodo(item.id)}>
                                </i>
                            </span>

                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default TodoItems;