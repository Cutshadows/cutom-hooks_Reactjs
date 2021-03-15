import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';
import { useForm } from '../../hooks/useForm';

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
    const [{description}, handleInputChange, reset]=useForm({
        description:''
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(description.trim().length<= 1){
            return;
        }
        const newTodo={
            id: new Date().getTime(),
            desc:description,
            done: false
        };
        const action={
            type:'add',
            payload:newTodo
        }
        dispatch(action);
        reset();
    }
    
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
    return ( 
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    {/* inicio de un componente listado */}
                    <Listado 
                    todos={todos} 
                    handleToggle={handleToggle} 
                    handleDelete={handleDelete}/>
                    {/* <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, indice)=>(
                                <li
                                key={todo.id}
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
                            ))
                        
                        }
                    </ul>    */}
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>

                    <Formulario 
                    handleSubmit={handleSubmit} 
                    handleInputChange={handleInputChange}
                    description={description}/>

                </div>
            </div>
           
        </div>
     );
}
 
export default TodoApp;