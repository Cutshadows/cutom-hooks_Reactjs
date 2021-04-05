import {useState} from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Pruebas sobre useForm', () => {
    const initialForm={
        name:'Fernando',
        email:'fernando@gmail.com'
    };
    

    test('debe retornar valores por defecto ', () => {
        const {result}=renderHook(()=>useForm(initialForm));
        const [valores, handleInputchange, reset] =result.current;


        expect(typeof valores).toBe('object');
        expect(valores).toBe(initialForm);
        expect(typeof handleInputchange).toBe('function');
        expect(typeof reset).toBe('function');
        
    });

    test('Debe de cambiar los valores del formulario', () => {
        const {result}=renderHook(()=>useForm(initialForm));
        const [, handleInputChange] =result.current;
       
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Francisco'
                }
            })
        });

        const [valores] =result.current;

        expect(valores).toEqual({...initialForm, name:'Francisco'});
        
    });

    test('debe de re-establecer el formulario de RESET ', () => {
        const {result}=renderHook(()=>useForm(initialForm));
        const [, , reset] =result.current;
       
        act(()=>{
            reset()
        });

        const [valores] =result.current;

        expect(valores).toEqual(initialForm);
        
    })
    
    
    
})
