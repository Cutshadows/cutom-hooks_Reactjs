import React from 'react';
import PropTypes from 'prop-types'; 

const Formulario = ({handleSubmit, handleInputChange, description}) => {
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
    description:PropTypes.string,
    handleSubmit:PropTypes.func,
    handleInputChange:PropTypes.func
}
 
export default Formulario;