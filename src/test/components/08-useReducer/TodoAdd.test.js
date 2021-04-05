import { shallow } from 'enzyme';
import { demotTodos } from '../../fixtures/demoTodos';
import Formulario from '../../../components/08-useReducer/Formulario';


describe('Pruebas sobre <TodoAdd></TodoAdd>', () => {
    const handleAddTodo=jest.fn();
    const wrapperTodoAdd=shallow(
    <Formulario 
    handleAddTodo={handleAddTodo}
    />)

    test('deberia de cargar el wrapper ', () => {
        expect(wrapperTodoAdd).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        const formSubmit=wrapperTodoAdd.find('form').prop('onSubmit');
        console.log(formSubmit)

        formSubmit({preventDefault(){}}); //otra forma de hacerlo

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })
    test('debe de llamar handleAddTodo', () => {
        const inputValue='Aprender React';
        // console.log(wrapperTodoAdd.find('input').html());
        wrapperTodoAdd.find('input').simulate('change', 
        {
            target:{
                name:'description',
                value:inputValue,
            }
        });
        // console.log(wrapperTodoAdd.find('input').html());

        const formSubmit=wrapperTodoAdd.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); //{}
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc:inputValue,
            done:false,
            id:expect.any(Number),
        }); //{}

        expect(wrapperTodoAdd.find('input').prop('value')).toBe('');
    })


    
})
