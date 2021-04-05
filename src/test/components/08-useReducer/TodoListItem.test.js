import React from 'react';
// import {act, renderHook} from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
// import { shallow } from 'enzyme';
import TodoListItem  from '../../../components/08-useReducer/TodoListItem';
import { demotTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoListItem></TodoListItem>', () => {
    const handleDelete=jest.fn();
    const handleToggle=jest.fn();
    
    const todoListItem=shallow(
     <TodoListItem
        todo={demotTodos[0]}
        indice={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
     />);
    
    test('debe de mostrarse correctamente ', () => {
        expect(todoListItem).toMatchSnapshot();
    })

    test('debe de llamar la funcion handleDelete', () => {
        // jest.fn();
        // toHaveBeenCalled
        // toHaveBeenCalledWith
        todoListItem.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demotTodos[0].id);
    })
    test('debe de llamar la funcion handleToggle', () => {
        // jest.fn();
        // toHaveBeenCalled
        // toHaveBeenCalledWith
        todoListItem.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demotTodos[0].id);
    })

    test('debe mostrar texto correctamente', () => {
        // jest.fn();
        // toHaveBeenCalled
        // toHaveBeenCalledWith
        const p=todoListItem.find('p');
        expect(p.text().trim()).toBe(`${0+1}-${demotTodos[0].desc}`)
    })

    test('debe mostrar la clase correspondiente a done', () => {
        const todo=demotTodos[0];
        todo.done=true;

        const wrapperTodoListItem=shallow(
            <TodoListItem
               todo={todo}
            />);

            // console.log(wrapperTodoListItem.html())
            expect(wrapperTodoListItem.find('p').hasClass('complete')).toBe(true)

        
    })
    
})
