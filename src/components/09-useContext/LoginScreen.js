import React,{useContext} from 'react';
import UserContext from './userContext';


const LoginScreen = () => {
    const {user, setUser} = useContext(UserContext);

    return ( 
        <>
            <h1>LoginScreen</h1>
            <hr/>
            <button
            className="btn btn-outline-success"
            onClick={()=>setUser({
                email:'main@email.com',
                name:'Monarca10'
            })}>
                Login
            </button>
        </>
     );
}
 
export default LoginScreen;