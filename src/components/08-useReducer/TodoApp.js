import React, { useEffect, useReducer } from 'react';
import {todoReducer} from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.scss';

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
    return ( 
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, indice)=>(
                                <li
                                key={todo.id}
                                className="list-group-item"
                                >
                                    <p className="text-center">{indice+1}-{todo.desc}</p>
                                    <button
                                    className="btn btn-danger"
                                    >Borrar</button>
                                </li>
                            ))
                        
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"/>
                        <button
                        type="submit"
                        className="btn btn-outline-success mt-1 w-100">Agregar</button>

                    </form>

                </div>
            </div>
           
        </div>
     );
}
 
export default TodoApp;