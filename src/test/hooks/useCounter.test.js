import {useState} from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const {result}=renderHook(()=>useCounter());

        expect(result.current.counter).toEqual(10);
        expect(typeof result.current.counter).toBe('number');
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrementar).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });
    
    test('debe de tener el counter en 100 ', () => {
        const {result}=renderHook(()=>useCounter(100));

        expect(result.current.counter).toEqual(100);
    })

    test('debe de incrementar el counter en 1', () => {
        const {result}=renderHook(()=>useCounter(100));

        const {increment}=result.current;

        act(()=>increment(1));

        const {counter}=result.current;
        expect(counter).toEqual(101);
    })

    test('debe de decrementar el counter en 1', () => {
        const {result}=renderHook(()=>useCounter(100));

        const {decrementar}=result.current;

        act(()=>decrementar(1));

        const {counter}=result.current;
        expect(counter).toEqual(99);
    })

    test('debe de resetear el counter en 10', () => {
        const {result}=renderHook(()=>useCounter(100));

        const {reset}=result.current;

        act(()=>reset());

        const {counter}=result.current;
        expect(counter).toEqual(100);
    })
    
    
    
})
