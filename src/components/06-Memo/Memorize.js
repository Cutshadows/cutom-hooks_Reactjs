import React,{useState} from 'react';
import Small from './Small';
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/effect.scss';


const Memorize = () => {

    const {state:counter, increment}=useCounter(10);

    const [show, setShow] = useState(true)

    return ( 
        <div>   
            <h1>Counter: <Small value={counter} /> </h1>
            <hr/>
            <button
                className="btn btn-success"
                onClick={()=>increment()}   
            >+1</button>
            <button
            className="btn btn-outline-danger ml-3"
            onClick={()=>{
                setShow(!show)
            }}
            >Show/Hide {JSON.stringify(show)}</button>
        </div>
     );
}
 
export default Memorize;