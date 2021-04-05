import {act, renderHook} from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas de <MultipleCustomHooks></MultipleCustomHooks>', () => {
    beforeEach(()=>{
        useCounter.mockReturnValue({
            counter:10,
            increment:()=>{}
        })
    })

    test('debe de mostrar correctamente', () => {
        useFetch.mockReturnValue({      
            data:null,
            loading:true,
            error:null
        })
        const wrapper=shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    test('debe de mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data:[{
                author:'Fernando',
                quote:'Hola Douglas'
            }],
            loading:false,
            error:null
        });

        const wrapper=shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Douglas');
        expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Fernando');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');
        // console.log(wrapper.html())

    })
    
})
