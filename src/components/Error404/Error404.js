import React from 'react';
import img from '../../Image/notFound.jpg'

const Error404 = () => {
    return (
        <div>
            <img className="img-fluid" src={img} alt="" />
        </div>
    );
};

export default Error404;