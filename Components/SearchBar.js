import { useState } from "react";
const SearchBar = ({ state, setstate }) => {
    const [todo, setTodo] = useState("");
    return (
        <div className="search_bar">
            <input type='text' placeholder="Save Your Plan....." onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <button type="submit"
                onClick={
                    () => {
                        if (todo.trim() !== '') {
                            setstate([
                                ...state,
                                { id: Date.now(), text: todo ,isCompleted:false }
                            ])
                            setTodo('');

                        }
                    }
                }
            >
                <i className="fa-solid fa-plus"></i></button>
        </div>

    )

}
export default SearchBar;