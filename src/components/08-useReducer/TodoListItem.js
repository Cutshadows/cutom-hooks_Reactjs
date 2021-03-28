import React from 'react';


const TodoListItem = ({todo, indice, handleDelete, handleToggle}) => {
    return ( 
        <li
            className="list-group-item"
            >
                <p 
                className={`${todo.done && 'complete'}`}
                onClick={()=>handleToggle(todo.id)}
                >{indice+1}-{todo.desc}</p>
                <button
                onClick={()=>handleDelete(todo.id)}
                className="btn btn-danger"
                >Borrar</button>
        </li>
     );
}
 
export default TodoListItem;