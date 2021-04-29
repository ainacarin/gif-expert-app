import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory Group', () => {

    // ref fn to evaluate (times calls, etc)
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('AddCategory: setCategory', () => {

        expect( wrapper ).toMatchSnapshot();

    });


    /** User actions */
    test('AddCategory: input onChange correct', () => {

        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', { target: { value } });

        const resInput = wrapper.find('input');
        expect(resInput.prop('value')).toBe(value);
    });

    test('AddCategory: no character input -> <p>error</p>', () => {

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });
        const errorElem = wrapper.find('p');
        const errorText = 'Error value';
        const input = form.find('input');
        expect(input.prop('value')).toBe('');
        expect(errorElem.text()).toBe(errorText);
        expect( setCategories ).not.toHaveBeenCalled( );
    });


});