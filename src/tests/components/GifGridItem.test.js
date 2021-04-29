import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Group Tests GifGridItem', () => {

    const url = 'https://localhost/item.jpg';
    const title = 'Title item';
    const classFadeIn = 'animate__fadeIn';

    const wrapper = shallow( <GifGridItem title={title} url={url}/> );
    
    test('GifGridItem: ok display', () => {


        expect( wrapper ).toMatchSnapshot();
    });

    test('GifGridItem: title', () => {
        const pElem = wrapper.find('p');
        expect( pElem.text() ).toBe( title )
    })

    test('GifGridItem: img url & alt', () => {
        const img = wrapper.find('img');
        const { src, alt } = img.props();
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('GifGridItem: class animate__fadeIn', () => {
        const div = wrapper.find('div');
        const classes = div.prop('className');
        expect(div.hasClass(classFadeIn)).toBe( true );
        expect(classes.includes(classFadeIn)).toBe( true );

    })

})