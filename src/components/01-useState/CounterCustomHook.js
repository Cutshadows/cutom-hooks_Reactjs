import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.scss';



const CounterCustomHook = () => {

    const {state:counter, increment, decrementar, reset}=useCounter();

    return ( 
        <>
                <h1>Counter {counter}</h1>
                <hr/>
                <button className="btn btn-primary"
                onClick={()=>increment(2)}
                >
                    +1
                </button>
                <button className="btn btn-primary m-1"
                onClick={()=>reset()}
                >
                 reset
                </button>
                <button className="btn btn-danger"
                onClick={()=>decrementar(2)}
                >
                    -1
                </button>
        </>
     );
}
 
export default CounterCustomHook;