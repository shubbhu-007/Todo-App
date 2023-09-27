import { useState } from "react";
const SearchBar = ({ state, setstate }) => {
    const [todo, setTodo] = useState("");
    const userInput = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div className="search_bar">
            <input type='text' placeholder="Save Your Plan....." onChange={userInput} />
            <button type="submit"
                onClick={
                    () => {
                        if (todo.trim !== '') {
                            setstate([
                                ...state,
                                { id: Date.now(), text: todo }
                            ])
                            setTodo('')
                        }
                    }
                }
            >
                Add</button>
        </div>

    )

}
export default SearchBar;