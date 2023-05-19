import React from 'react';
import error from '../../../assets/404.jpeg'
const ErrorPage = () => {
    return (
        <div>
            <img className='h-screen' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;