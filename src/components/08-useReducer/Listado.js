import React from 'react';
import PropTypes from 'prop-types'; 
import TodoListItem from './TodoListItem';


const Listado = ({todos, handleToggle, handleDelete}) => {
    return ( 
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, indice)=>(
                    <TodoListItem 
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                    todo={todo} 
                    indice={indice} />
                ))
            
            }
        </ul>        
     );
}
Listado.propTypes={
    todos:PropTypes.array,
    handleToggle:PropTypes.func,
    handleDelete:PropTypes.func
}
 
export default Listado;