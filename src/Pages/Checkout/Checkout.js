import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider'

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user}=useContext(AuthContext);
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email=user?.email || 'unregistered'
        const name=`${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const message = form.message.value;
    
        const order ={
            service:_id,
            serviceName:title,
            price,
            customer:name,
            email,
            phone,
            message
        }
        if(phone.length > 10){
            alert('Phone number should be 10 character only')
        }

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                 authorization:`Bearer ${localStorage.getItem('genius-token')}`
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Order Placed Successfully');
                form.reset();
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
          <form onSubmit={handleSubmit} className='w-3/4 m-auto mb-3'>
            <h2 className='text-4xl text-center m-5'>{title}</h2>
            <h2 className='text-3xl text-center m-5'>Price:{price}$</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
            <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your Message"></textarea>
            <input className='btn' type="submit" value="Place Your Order" />
          </form>
        </div>
    );
};

export default Checkout;