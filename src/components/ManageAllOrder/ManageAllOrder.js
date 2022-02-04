import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { faCaretDown, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ManageAllOrder.css';

const ManageAllOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        fetch('https://ghostly-blood-77078.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setManageOrder(data))
    }, [])
    //change status after click
    const changeStatus= (e) => {
        e.target.innerText = 'active'
    }
    //toggle checkboxes
    const toggleCheckbox = () => {
        setChecked(prevState => !prevState)
    }

    //DELETE AN USER 
    const handleDeleteManageOrder = id => {
        const confirm = window.confirm('Are you sure to delete?');
        if(confirm){
            const url = `https://ghostly-blood-77078.herokuapp.com/orders/${id}`;
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
        <Container>
            <div className='manage-order'>
                <h3 className='my-4' style={{color: '#34495E'}}>Order Management</h3>
                <div className='mobile'>
            {!manageOrder.length ? 
                  <Spinner animation="grow" variant="warning" /> :
                <div className='p-2'>
                    {manageOrder.map(order => 
                    <div className='p-2 rounded-3 mb-3' style={{backgroundColor: 'white'}}>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className='d-flex justify-content-between'><span><FontAwesomeIcon icon={faUser} className='user'/> ID:</span><span>{order._id}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' style={{backgroundColor: '#f1f1f1'}}><span>Package Name:</span><span>{order.name}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' ><span>Date:</span><span>{order.date}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' style={{backgroundColor: '#f1f1f1'}}><span>Customer:</span><span>{order.displayName}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' ><span>Package Name:</span><span>{order.name}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' style={{backgroundColor: '#f1f1f1'}}><span>Package Price:</span><span>{order.amount}</span></td>
                                </tr>
                                <tr>
                                    <td className='d-flex justify-content-between' ><span>Order Status:</span>
                                    <div>
                                        <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#E59866', display: 'inline-block', marginRight: 5}}>
                                        </div><span  className='fs-6 border cursor rounded-2 border-warning text-warning' onClick={(e) => changeStatus(e)}>Pending...</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{backgroundColor: '#f1f1f1'}}><Button style={{backgorundColor: '#F9E79F'}} onClick={() => handleDeleteManageOrder(order._id)}>Delete Order</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                </div>
            }
            </div>
                <div className='wide'>
                {!manageOrder.length ? 
                      <Spinner animation="grow" variant="warning" /> :
                    <table className="table">
                        <thead className='table-warning'>
                            <tr>
                            <th scope="col" className='fs-6'><input type='checkbox' onClick={toggleCheckbox}/></th>
                            <th scope="col" className='fs-6'>OrderID<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Date<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Customer<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Order<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Place<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Price<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Status<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            <th scope="col" className='fs-6'>Delete<FontAwesomeIcon icon={faCaretDown} className='ms-1'/></th>
                            </tr>
                        </thead>
                        <tbody>
                    {manageOrder.map(order =>
                            <tr>
                            <td className='align-middle'><p className='fs-6'><input type='checkbox' checked={checked}/></p></td>
                            <td className='align-middle'><p className='fs-6'>{order._id}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.date}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.displayName}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.name}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.place}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.amount}</p></td>
                            <td className='align-middle'><p style={{cursor: 'pointer'}} className='fs-6 border cursor rounded-2 border-warning text-warning' onClick={(e) => changeStatus(e)}>pending...</p></td>
                            <td className='align-middle'><FontAwesomeIcon icon={faTimes} style={{cursor: 'pointer'}} className='text-warning fs-4' title='delete' onClick={() => handleDeleteManageOrder(order._id)}/></td>
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

export default ManageAllOrder;