import React, { useEffect, useState } from 'react';


const Message = () => {
    
    const [coords, setCoords] = useState({
        x:0,
        y:0
    })

    useEffect(() => {
        const mouseMove=(e)=>{
            const coords={x: e.x, y:e.y};
            setCoords(coords) 
         }
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [coords])
    const {x, y}=coords;

    return ( 
        <div> 
            <h3>Eres genial</h3>
            <h3>X:{x} Y:{y}</h3>
        </div>
     );
}
 
export default Message;