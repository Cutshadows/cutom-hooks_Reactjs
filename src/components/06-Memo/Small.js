import React from 'react';


const Small = React.memo(({value}) => {
    console.log('me llamaron')
    return ( 
        <small>{value}</small>
     );
})
 
export default Small;