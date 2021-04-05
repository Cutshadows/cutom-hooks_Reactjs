
import {act, renderHook} from '@testing-library/react-hooks';
// import { shallow } from 'enzyme';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demotTodos } from '../../fixtures/demoTodos';




describe('Pruebas sobre los todoReducer', () => {
    
    
    test('debe de retornar el estado por defecto ', () => {
        const state=todoReducer(demotTodos, {});    
        expect(state).toEqual(demotTodos);
    })


    test('debe de agregar un todo ', () => {

        const addTodo={
            id: new Date().getTime(),
            desc:'Aprender Simphony',
            done: false
        }
        const action={
            type:'add',
            payload:addTodo
        };
        
        const state=todoReducer(demotTodos, action);    
        expect(state.length).toBe(3);
        expect(state).toEqual([...demotTodos, addTodo]);
    })


    test('debe de eliminar un todo ', () => {
        const todoDelete=demotTodos.filter(demo=>demo.id!==1);
        const action={
            type:'delete',
            payload:1
        };

        
        const state=todoReducer(demotTodos, action);    
        expect(state.length).toBe(1);
        expect(state).toEqual(todoDelete);
    })


    test('debe de cambiar el estado done ', () => {
        const action={
            type:'toggle',
            payload:1
        };

        
        const state=todoReducer(demotTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demotTodos[1]);

    })
    
})
