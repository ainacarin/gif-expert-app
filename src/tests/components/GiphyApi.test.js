import React from 'react';
import { getGifs } from '../../api/giphyApi';

describe('GiphyApi Group', () => {

    test('GiphyApi -> 10 results', async () => {

        const res = await getGifs('Rick and Morty');
        expect(res.length).toBe( 10 );

    });

    test('GiphyApi: no category -> 0 results', async () => {

        const res = await getGifs('');
        expect(res.length).toBe( 0 );

    });

});