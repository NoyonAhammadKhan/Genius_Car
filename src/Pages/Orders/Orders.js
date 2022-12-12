import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';


const Orders = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log(user);
    const [orders, setOrders]=useState([]);
    const handleDelete=(id)=>{
      const proceed = window.confirm('Are you sure, you want to delete it?');
      if(proceed){
        fetch(`http://localhost:5000/orders/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
            alert('deleted successfully');
            const remaining = orders.filter(odr=>odr._id !==id);
            setOrders(remaining);
          }
        })
      }
    }

    const handleStatusUpdate=id=>{
      fetch(`http://localhost:5000/orders/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'Approved'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
          const remaining = orders.filter(odr => odr._id !== id);
          const approving = orders.find(odr => odr._id ===id);
          approving.status='Approved';
          const newOrders=[approving,...remaining]
          setOrders(newOrders);
        }
      })
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
          headers:{
            authorization:`Bearer ${localStorage.getItem('genius-token')}`
          }
        })
        .then(res=>{
          res.json()
          if(res.status === 401 || res.status === 403){
            logOut();
          }
        })
        .then(data=>setOrders(data))
        .catch(err=>console.log(err))
    },[user?.email])

    return (
        <div>
            <h2 className='text-5xl'>You have{orders?.length} </h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
     {
      orders &&  orders.map(order=><OrderRow key={order._id} handleStatusUpdate={handleStatusUpdate} handleDelete={handleDelete} order={order}></OrderRow>)
     }
     
    
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default Orders;