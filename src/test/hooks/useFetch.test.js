import {act, renderHook} from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Pruebas de useFetch()', () => {
    
    test('Deberia de traer la informacion por defecto ', () => {

        const {result} =renderHook(()=>useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        const {data, loading, error}=result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);


    })


    test('Deberia de tener la informacion deseada ', async () => {

        const {result, waitForNextUpdate} =renderHook(()=> useFetch(`https://reqres.in/api/users?page=2`));

        //  act(async()=>{
            await waitForNextUpdate();
        // })
        const {data, loading, error}=result.current;

        // expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
        expect(typeof data).toBe('object');
       
    })

    test('Deberia de tener un error al pegar al endpoint ', async () => {

        const {result, waitForNextUpdate} =renderHook(()=> useFetch(`https://reqres.in/apiasd/users?page=2`));

            await waitForNextUpdate();
        const {data, loading, error}=result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la información');
        // expect(typeof data).toBe('object');
       
    })
    
})
