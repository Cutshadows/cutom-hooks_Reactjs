import React from 'react';
import PropTypes from 'prop-types'; 
import { useForm } from '../../hooks/useForm';

const Formulario = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset]=useForm({
        description:''
    });

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
        handleAddTodo(newTodo);
        reset();
    }
    return ( 
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
     );
}
Formulario.protoTypes={
    handleAddTodo:PropTypes.func,
}
 
export default Formulario;