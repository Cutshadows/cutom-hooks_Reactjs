
const initialState=[{
    id:1,
    todo:'Comprar pan',
    done:false
}];
const todoReducer=(state=initialState, action)=>{
    switch(action?.type){
        case 'NUEVO_TODO':
            return [...state, action.payload];    
        break;
        default:return state
    }
};

let todos=todoReducer();

const newTodo={
    id:2,
    todo:'Comprar leche',
    done:false
};

const agregarTodoAction={
    type:'NUEVO_TODO', //standar que lleve type la accion
    payload:newTodo  //argumento generalmente se utiliza como payload para mejor trasabilidad
}
todos=todoReducer(todos, agregarTodoAction);
// no usar push en los arreglos el push modifica o muta los objetos
console.log(todos)