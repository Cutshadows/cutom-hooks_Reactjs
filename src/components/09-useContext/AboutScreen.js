import React, {useContext} from 'react';
import UserContext from './userContext';


const AboutScreen = () => {
    const {user, setUser} = useContext(UserContext);
    const handleClick=()=>{
        setUser({});
    }
    return ( 
        <>
            <h1>ABOUT SCREEN</h1>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                className="btn btn-warning"
                onClick={handleClick}>
                Logout
            </button>
        </>
     );
}
 
export default AboutScreen;