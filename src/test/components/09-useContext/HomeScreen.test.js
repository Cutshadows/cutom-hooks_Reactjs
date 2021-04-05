import { shallowm, mount } from 'enzyme';
import React from 'react';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import UserContext from '../../../components/09-useContext/userContext';


describe('Pruebas sobre <HomeScreen></HomeScreen>', () => {
    
    const user={
        name:'Fernando',
        email:'Fernando@gmail.com'
    }
    const wrapper=mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>    
    )
    test('debe de cargar el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
