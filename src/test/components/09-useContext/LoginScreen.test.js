import React from 'react';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import UserContext from '../../../components/09-useContext/userContext';
import { shallowm, mount } from 'enzyme';



describe('Pruebas sobre <LoginScreen></LoginScreen>', () => {
    
    const setUser=jest.fn();
    const wrapper=mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>    
    )
    test('debe de cargar el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado  ', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            email:'main@email.com',
            name:'Monarca10'
        });
    });



    
})
