import { mount } from 'enzyme';
import React from 'react';
import {AppRouter} from '../../../components/09-useContext/AppRouter';
import UserContext from '../../../components/09-useContext/userContext';

describe('Pruebas en AppRouter', () => {
    const user={
        id:1,
        name:'Fernando',
        email:'Fernandoq@email.com'
    }
    const wrapper=mount(
    <UserContext.Provider value={{
        user
    }}>
        <AppRouter />
    </UserContext.Provider>
    );
    test('debe de cargar las rutas', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
