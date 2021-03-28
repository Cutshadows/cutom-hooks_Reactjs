import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';

import './styles.scss';
import Listado from './Listado';
import Formulario from './Formulario';

const init=()=>{
    // return localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
    return JSON.parse(localStorage.getItem('todos'))||[];
    // return [{
    //     id: new Date().getTime(),
    //     desc:'Aprender react',
    //     done: false
    // }];
};

const TodoApp = () => {
 
    const [todos, dispatch] = useReducer(todoReducer, [], init)
   
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleDelete=(todoId)=>{
        const action={
            type:'delete',
            payload:todoId
        };
        dispatch(action);
    }
    const handleToggle=(todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }

    const handleAddTodo=(newTodo)=>{
        dispatch({
            type:'add',
            payload:newTodo
        });
    }
    return ( 
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <Listado 
                    todos={todos} 
                    handleToggle={handleToggle} 
                    handleDelete={handleDelete}/>
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>

                    <Formulario 
                    handleAddTodo={handleAddTodo}/>

                </div>
            </div>
           
        </div>
     );
}
 
export default TodoApp;