
export const todoReducer=(state=[], action)=>{
    switch(action.type){
        case 'delete':
            return state.filter(todo=>todo.id!==action.payload);
        break;    
        case 'add':
                return [...state, action.payload]    
        break;
        case 'toggle': 
            return state.map(todo=>(todo.id===action.payload)
            ?{...todo, done:!todo.done}
            : todo
            )
         break;
        case 'toggle-old':
            return state.map(todo=>{
                if(todo.id===action.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }else{
                    return todo;
                }
            })
        default:return state;
    }
}