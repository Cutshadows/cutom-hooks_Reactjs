import React from 'react';
const Reducer = () => {

    const initialState=[{
        id:1,
        todo:'Comprar pan',
        done:false
    }];
    const todoReducer=(state=initialState, action)=>{
        switch(action){
            case 'add':
                [...state, action.payload]    
            break;
            default:return state
        }
    };
    
    let todos=todoReducer();
    console.log(todos)
    return ( 
        <div>


        </div>

     );
}
 
export default Reducer;