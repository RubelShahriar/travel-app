import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css';

const ManageAllOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch('https://ghostly-blood-77078.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setManageOrder(data))
    }, [])

    //DELETE AN USER 
    const handleDeletemanageOrder = id => {
        const confirm = window.confirm('Are you sure to delete?');
        if(confirm){
            const url = `https://ghostly-blood-77078.herokuapp.com/${id}`;
        fetch(url, {
            method: 'delete',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('manageOrder deleted successfully');
                const remainingmanageOrders = manageOrder.filter(manageOrder => manageOrder._id !== id);
                setManageOrder(remainingmanageOrders);
            }
        })
        }
    }
    return (
        <div className='manage-orders'>
            <h2>All Orders Are Here</h2>
            <div className='display'>
            {
                manageOrder.map(manageOrder => 
                <div className='item'>
                    <div className='image'>
                        <img src={manageOrder.image} alt=''></img>
                    </div>
                    <div>
                        <p>{manageOrder.place}</p>
                        <h4>{manageOrder.name}</h4>
                        <p>{manageOrder.amount}</p>
                        <button className='button' onClick={() => handleDeletemanageOrder(manageOrder._id)}>Delete</button>
                    </div>
                </div>) 
            }
            </div>
        </div>
    );
};

export default ManageAllOrder;