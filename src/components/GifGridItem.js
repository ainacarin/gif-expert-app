import React from 'react';


export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div id={id} className='card'>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    );

};