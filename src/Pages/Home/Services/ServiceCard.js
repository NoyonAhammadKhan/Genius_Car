import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const  {img,title,price,_id}=service;
    const serviceData = useLoaderData();


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl text-orange-600'>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;