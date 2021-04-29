import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div id={id} className='card animate__animated animate__fadeIn'>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    );

};

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}