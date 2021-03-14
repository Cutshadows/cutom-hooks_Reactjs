import React, {useState, useLayoutEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
// import '../03-examples/multiplecustomhooks.scss';
import './layout.scss';

const LayoutEffect = () => {

    const {increment, state}=useCounter(1);
    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);


    const {author, quote}=!!data&&data[0]; //condicion logica que se evalua con doble negacion quiero transformar ese null en valor booleano

    const pTag=useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return ( 
        <div> 
            <h1>LayoutEffect</h1>
                <blockquote className="blockquote text-right">
                    <p  
                    className="mb-0"
                    ref={pTag}
                    >
                        {quote}
                    </p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                <pre>
                    {JSON.stringify(boxSize, null, 3)}
                </pre>
            <button className="btn btn-primary"
            onClick={()=>increment()}>
                Siguiente quote
            </button>
            

         </div>
     );
}
 
export default LayoutEffect;