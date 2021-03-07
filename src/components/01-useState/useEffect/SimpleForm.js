import React, { useEffect, useState } from 'react';


import './effect.scss';
import Message from './Message';




const SimpleForm = () => {
    
    const [state, setstate] = useState(0)
    const [formstate, setformState] = useState({
        name:'',
        email:'',
    })
    const {email, name}=formstate;
    
    useEffect(() => {
        // console.log('hey')

    },[]);

    useEffect(() => {
        // console.log('formstate cambio')
    },[formstate]);

    useEffect(() => {
        // console.log('email cambio')
    },[email]);

    
    const handleInputChange=({target})=>{
        // e.preventDefault();
        setformState({
            ...formstate,
            [target.name]:target.value

        });
    }
    return ( 
        <>
            <h1>useEffect</h1>
            <hr/>
            
            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="TU nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />

            </div>
            <div className="form-group">
                <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="TU email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />

            </div>

            {(name==='123')&& <Message/>}

        </>
     );
}
 
export default SimpleForm;