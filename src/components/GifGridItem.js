import React from 'react';


export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div id={id}>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    );

};