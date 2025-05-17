
import react, { useState }  from "react";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";

function ToDolist(){

    const [input , setinput ] = useState("");
    const [items , setitems ] = useState([]);

    const additem = () =>{
        if (input.trim() === "") return;
        setitems([...items , {id : uuidv4() , value : input}]);
        setinput("");
    }

    const deleteitem = (id) => {
        setitems(items.filter((item) => item.id !== id));
    };

    return(
        <div>
            <h1>To Do List</h1>
            <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
            <button onClick={additem}>Add</button>
            <ul>
                {items.map((item)=>(
                    <li key={item.id}>
                        {item.value}
                        <button onClick={() => deleteitem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDolist