import React,{useMemo, useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import {procesoPesado} from '../helpers/proceso-pesado';

import '../02-useEffect/effect.scss';

const MemoHook = () => {
    const {state:counter, increment}=useCounter(1);
    const [show, setShow] = useState(true)
    const memoProcesoPesado=useMemo(() => procesoPesado(counter), [counter]);

    return ( 
        <div>
            <p>MEMOOHOOK</p>   
            <h1>Counter: <small>{counter} </small> </h1>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button
                className="btn btn-success"
                onClick={()=>increment()}   
            >+1</button>
            <button
            className="btn btn-outline-danger m-3"
            onClick={()=>{
                setShow(!show)
            }}
            >Show/Hide {JSON.stringify(show)}</button>
        </div>
     );
}
 
 
export default MemoHook;