const { shallow, mount } = require("enzyme")
import { act } from '@testing-library/react';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demotTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoApp></TodoApp>', () => {


    const wrapper=shallow(<TodoApp />)

    Storage.prototype.setItem=jest.fn(()=>{});
    test('deberia de cargar todo el wrapper ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

    test('debe de agregar un Todo', () => {
        const wrapper=mount(<TodoApp />);
        act(()=>{
            wrapper.find('Formulario').prop('handleAddTodo')(demotTodos[0]);
            wrapper.find('Formulario').prop('handleAddTodo')(demotTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        // expect(localStorage.setItem).toHaveBeenCalledWith({});

        
    });
    test('debe eliminar un todo', () => {
        
        wrapper.find('Formulario').prop('handleAddTodo')(demotTodos[0]);
        wrapper.find('Listado').prop('handleDelete')(demotTodos[0].id);
        // expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');



    })
    
    
})
