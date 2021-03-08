import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effect.scss';



const FormWithCustomHook = () => {
    
    // const [formstate, setformState] = useState({
    //     name:'',
    //     email:'',
    //     password:''
    // })
    const [formValues, handleInputChange]=useForm({
            name:'',
            email:'',
            password:''
        });
    const {email, name, password}=formValues;
    
    useEffect(() => {
        console.log('email cambio')
    }, [email])
    // const handleInputChange=({target})=>{
    //     // e.preventDefault();
    //     setformState({
    //         ...formstate,
    //         [target.name]:target.value

    //     });
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues)

    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
            <div className="form-group">
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="*********"
                value={password}
                onChange={handleInputChange}
                />

            </div>
                <button type="submit" className="btn btn-success m-1">
                    Guardar
                </button>

        </form>
     );
}
 
export default FormWithCustomHook;