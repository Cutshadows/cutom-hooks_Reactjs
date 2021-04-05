import React from 'react';
// import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import HookApp from '../../HookApp';

describe('Prueba sobre <HookApp></HookApp>', () => {
    const wrapper=shallow(<HookApp />);

    test(' probando despliegue de wrapper de hookApp ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
