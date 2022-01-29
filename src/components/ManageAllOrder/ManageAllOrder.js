import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { faCaretDown, faTimes} from '@fortawesome/free-solid-svg-icons';
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
    const handleDeletemanageOrder = id => {
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
            <div className='manage-orders vh-100'>
                <h3 className='my-4' style={{color: '#34495E'}}>Order Management</h3>
                <div>
                {!manageOrder.length ? 
                      <Spinner animation="grow" variant="warning" /> :
                    <table className="table">
                        <thead className='table-warning'>
                            <tr>
                            <th scope="col" className='fs-6'><input type='checkbox' checked={checked}/></th>
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
                            <td className='align-middle'><p className='fs-6'><input type='checkbox'/></p></td>
                            <td className='align-middle'><p className='fs-6'>{order._id}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.date}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.displayName}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.name}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.place}</p></td>
                            <td className='align-middle'><p className='fs-6'>{order.amount}</p></td>
                            <td className='align-middle'><p style={{cursor: 'pointer'}} className='fs-6 border cursor rounded-2 border-warning text-warning' onClick={(e) => changeStatus(e)}>pending...</p></td>
                            <td className='align-middle'><FontAwesomeIcon icon={faTimes} style={{cursor: 'pointer'}} className='text-warning fs-4' title='delete' onClick={() => handleDeletemanageOrder(order._id)}/></td>
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