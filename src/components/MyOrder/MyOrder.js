import React, { useEffect, useState } from 'react';
import './MyOrder.css';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://ghostly-blood-77078.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])

    //DELETE AN USER
    const handleDeleteOrder = id => {
        const confirm = window.confirm('Are you sure to delete?');
        if(confirm){
            const url = `https://ghostly-blood-77078.herokuapp.com/${id}`;
        fetch(url, {
            method: 'delete',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('order deleted successfully');
                const remainingOrders = order.filter(order => order._id !== id);
                setOrder(remainingOrders);
            }
        })
        }
    }
    
    return (
        <div className='orders'>
            <h2>Your Orders</h2>
            <div className='display'>
            {
                order.map(order => 
                <div className='item'>
                    <div className='image'>
                        <img src={order.image} alt=''></img>
                    </div>
                    <div>
                        <p>{order.place}</p> 
                        <h4>{order.name}</h4>
                        <p>{order.amount}</p>
                        <button className='button' onClick={() => handleDeleteOrder(order._id)}>Delete Order</button>
                    </div>
                </div>) 
            }
            </div>
        </div>
    );
};

export default MyOrder;