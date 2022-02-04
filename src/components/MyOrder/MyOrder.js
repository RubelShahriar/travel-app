import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
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
        const confirm = window.confirm('Are you sure to cancel order?');
        if(confirm){
            const url = `https://ghostly-blood-77078.herokuapp.com/orders/${id}`;
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
        <Container>
            <div className='my-order'>
            <h3 className='my-4'>Placed Orders</h3>
            <div className='mobile'>
            {!order.length ? 
                  <Spinner animation="grow" variant="warning" /> :
                <div className='p-2'>
                    {order.map(order => 
                    <div className='p-2 rounded-3 mb-3' style={{backgroundColor: 'white'}}>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><img src={order.image} style={{height: '100px',width: '200px',borderRadius: '10px'}} alt=''></img></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between'><span>Package Name:</span><span>{order.name}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' style={{backgroundColor: '#f1f1f1'}}><span>Place:</span><span>{order.place}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' ><span>Price:</span><span>{order.amount}</span></td>
                                </tr>
                                <tr>
                                    <td style={{backgroundColor: '#f1f1f1'}}><Button style={{backgorundColor: '#F9E79F'}} onClick={() => handleDeleteOrder(order._id)}>Cancel Order</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                </div>
            }
            </div>
            <div className='general'>
            {!order.length ? 
                  <Spinner animation="grow" variant="warning" /> :
                <table class="table">
                    <thead className='mb-5 table-warning'>
                        <tr>
                        <th scope="col" className='fs-5'>Item</th>
                        <th scope="col" className='fs-5'>name</th>
                        <th scope="col" className='fs-5'>Place</th>
                        <th scope="col" className='fs-5'>Price</th>
                        <th scope="col" className='fs-5'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                {order.map(order => 
                        <tr>
                        <td><img src={order.image} style={{height: '100px',width: '200px',borderRadius: '10px'}} alt=''></img></td>
                        <td className='align-middle'><p className='fs-5'>{order.name}</p></td>
                        <td className='align-middle'><p className='fs-5'>{order.place}</p></td>
                        <td className='align-middle'><p className='fs-5'>{order.amount}</p></td>
                        <td className='align-middle'><Button className='btn-primary fs-5' onClick={() => handleDeleteOrder(order._id)}>Cancel Order</Button></td>
                        </tr>
                )}
                </tbody>
                </table>
            }
            </div>
            </div>
        </Container>
    );
};

export default MyOrder;