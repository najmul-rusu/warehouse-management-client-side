import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='sec'>
            <h1 className='error-msg pt-5'>404</h1>
            <h2 className='pb-5'>That page can’t be found.</h2>
        </div>
    );
};

export default NotFound;