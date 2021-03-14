import React, { useRef } from 'react';
import '../02-useEffect/effect.scss';

 const FocusScreen=()=>{

    const inputRef = useRef();
    // console.log(ref)
    const handleClick=()=>{
        // document.querySelector('input').focus();
        // document.querySelector('input').select();
        inputRef.current.select();

        console.log(inputRef)
    }
    return (
        <div>
            <h2>Focus Screen</h2>
            <hr/>

            <input 
                ref={inputRef}
                className="form-control"
                placeholder="nombre"/>
            
            <button className="btn btn-outline-primary mt-5"
                onClick={handleClick}>
                focus
            </button>
        </div>
    )
}


export default FocusScreen;
