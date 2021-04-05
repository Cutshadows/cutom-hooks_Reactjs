import {useState} from 'react';
import {act, renderHook} from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import ReactExampleRef from '../../../components/04-useRef/ReactExampleRef';


describe('Pruebas en <ReactExampleRef></ReactExampleRef>', () => {
    const wrapper=shallow(<ReactExampleRef/>);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    
    test('debe mostrarse el componente <MultipleCustomHooks></MultipleCustomHooks>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

        const {result}=renderHook(()=>useState(false));
        const [,setShow]=result.current;
        act(()=>{
           setShow(true)
        })
        const[show]=result.current;
        expect(show).toBe(true);


    })
    
    
})
