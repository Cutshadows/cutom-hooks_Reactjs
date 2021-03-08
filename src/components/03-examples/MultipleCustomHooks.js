import React from 'react';
import useFetch from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
import './multiplecustomhooks.scss';

const MultipleCustomHooks = () => {

    const {increment, state}=useCounter(1);
    const {loading, data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const {author, quote}=!!data&&data[0]; //condicion logica que se evalua con doble negacion quiero transformar ese null en valor booleano

    return ( 
        <div> 
            <h1>MultipleCustomHooks</h1>
            
            {loading?
            (
                <div className="alert alert-info text-center">
                loading...
                </div>
            ):
            (
                <blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )
            }
            
            
            <button className="btn btn-primary"
            onClick={()=>increment()}>
                Siguiente quote
            </button>
            

         </div>
     );
}
 
export default MultipleCustomHooks;