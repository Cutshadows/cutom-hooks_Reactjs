import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/effect.scss';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment=()=>{
    //     setCounter(counter+1)
    // }

    const increment=useCallback((num)=>{
        setCounter(c=>c+num);
    }, [setCounter]);

    useEffect(() => {
        //????
    }, [increment])
    return ( 
        <div>
            <h1>USE CALLBACK {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} /> 
        </div>
     );
}
 
export default CallbackHook;