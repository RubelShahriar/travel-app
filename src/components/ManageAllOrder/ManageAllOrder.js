import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css';

const ManageAllOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/orders')
        .then(res => res.json())
        .then(data => setManageOrder(data))
    }, [])

    //DELETE AN USER
    const handleDeletemanageOrder = id => {
        const confirm = window.confirm('Are you sure to delete?');
        if(confirm){
            const url = `http://localhost:4000/manageOrders/${id}`;
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
        <div className='manageOrders'>
            manageOrder: {manageOrder.length}
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
                        <button onClick={() => handleDeletemanageOrder(manageOrder._id)}>Delete</button>
                    </div>
                </div>) 
            }
            </div>
        </div>
    );
};

export default ManageAllOrder;