import React,{useState} from 'react';
import './counter.scss';

const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20
    })

    console.log(counter)
    return ( 
        <>
            {/* <h1>Counter {counter}</h1> */}
            <h1>Counter {counter.counter1}</h1>
            <h1>Counter {counter.counter2}</h1>

            <button className="btn btn-primary" onClick={
                ()=>{setCounter(counter+1)}}>
                +1
            </button>

        </>
     );
}
 
export default CounterApp;