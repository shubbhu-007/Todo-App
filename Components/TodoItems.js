import { useState } from "react";
const TodoItems = ({ todolist, deleteTodo, editableTodo , setEditableTodo , saveTodo , editText , seteditText}) => {
    return (
        <div className="todo_items_container">
            {
                todolist.map((item) => {
                    // console.log(item.isEditable.editable);
                    if(item){
                        return (editableTodo === item.id) ? (
                            <div className=" todo_items todo_edit_items" key={item.id}>
                                <input
                                    type="text"
                                    placeholder="Edit Plan .............."
                                    value={editText}
                                    
                                    onChange={ (e) => seteditText(e.target.value)}

                                />
                                 <div className="icon_container icon_edit_items">
                                <span>
                                    <i className="fa-solid fa-floppy-disk" title="Save"
                                        onClick={
                                            () =>
                                             saveTodo(item.id, editText)
                                            }

                                    >

                                    </i>
                                </span>
                                </div>
                            </div>



                        )
                    
                         : (
                            <div className="todo_items" key={item.id}>
                                <p>{item.text}</p>
                                <div className="icon_container">
                                    <span>
                                        <i className="fa-regular fa-pen-to-square" title="Edit"
                                            onClick={
                                                () => setEditableTodo(item.id)
                                            }>
                                        </i>
                                    </span>


                                    <span>
                                        <i className="fa-solid fa-trash" title="Delete"
                                            onClick={() => deleteTodo(item.id)}>
                                        </i>
                                    </span>
                                </div>

                            </div>
                        )
                    
}
else{
    console.log("no item")
}

})}

        </div >
    )
}

export default TodoItems;