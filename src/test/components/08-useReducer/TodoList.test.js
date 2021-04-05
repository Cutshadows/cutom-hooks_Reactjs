import React from 'react';
// import {act, renderHook} from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
// import { shallow } from 'enzyme';
import Listado  from '../../../components/08-useReducer/Listado';
import { demotTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoList></TodoList>', () => {
    const handleDelete=jest.fn();
    const handleToggle=jest.fn();
    
    const todoListWrapper=shallow(
     <Listado
        todos={demotTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
     />);
    
    test('debe de mostrarse correctamente Listado', () => {
        expect(todoListWrapper).toMatchSnapshot();
    })

    test('deberia mostrar el despliegue <TodoListItem></TodoListItem>', () => {
        expect(todoListWrapper.find('TodoListItem').length).toBe(demotTodos.length);
        // console.log(todoListWrapper.find('TodoListItem').at(0).props().handleDelete)
        expect(todoListWrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(todoListWrapper.find('TodoListItem').at(1).prop('handleToggle')).toEqual(expect.any(Function));
    })
    
    
})