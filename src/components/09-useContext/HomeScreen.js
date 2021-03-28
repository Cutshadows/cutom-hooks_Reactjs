import React, { useState, useContext } from 'react';
import UserContext from './userContext';


const HomeScreen = () => {
    const {user} = useContext(UserContext);

    return ( 
        <>
            <h1>HomeScreen</h1>

            <pre >
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
     );
}
 
export default HomeScreen;