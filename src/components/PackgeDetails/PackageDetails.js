import React, { useEffect, useRef, useState } from 'react';
import './PackageDetails.css';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';

const PackageDetails = () => {
    const [insertId, setInsertId] = useState('')
    const [packageItem, setPackageItem] = useState({});
    const {image, place, name, amount, description} = packageItem
    const {user} = useAuth();
    const {id} = useParams();

    useEffect( () => {
        const url = `https://ghostly-blood-77078.herokuapp.com/packages/${id}`;
        // const url = `http://localhost:4000/packages/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPackageItem(data))
    },[])


    const date = new Date()
    const imageRef= useRef();
    const placeRef= useRef();
    const nameRef= useRef();
    const amountRef= useRef();

    const handleDetailsForm = e =>{
        const image= imageRef.current.value;
        const place= placeRef.current.value;
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const packageInfo = {image, place, name, amount};
        fetch('https://ghostly-blood-77078.herokuapp.com/orders', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            setInsertId(data)
            if(data.insertedId){
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className='pacakge-details'>
                <h2 style={{margin: '50px 0'}}>Place An Order </h2>
            <Container>
                <div className='grid'>
                    <div className='left'>
                        <img src={image} alt=''></img>
                        
                    </div>
                    {/* middle div============================ */}
                    <div style={{textAlign: 'left', padding: '0 20px'}}>
                        <p>Package Name: {name}</p>
                        <p className='mb-3'>Price: {amount}</p>
                        <p className='mb-3'>Place: {place}</p>
                        <p className='mb-3'>Place: {description}</p>
                        <button>May its a greate value for you</button>
                    </div>
                    {/* middle div============================ */}
                    <div className='right'>
                        <div>
                            <form onSubmit={handleDetailsForm}>
                                <input type="text" onChange={console.log()} value={user.displayName}></input>
                                <input type="text" onChange={console.log()} value={user.email}></input>
                                <input type="url" className='d-none' onChange={console.log()}  value={packageItem.image} ref={imageRef}></input>
                                <input type="text" onChange={console.log()} value={packageItem.name} ref={nameRef}></input>
                                <input type="text" onChange={console.log()} value={packageItem.place} ref={placeRef}></input>
                                <input type="text" className='d-none' onChange={console.log()} value={`$${packageItem.amount}`} ref={amountRef}></input>
                                <input type="number" className='number' placeholder='Enter Phone'></input>
                                <input type="text" className='number' placeholder='Enter Address' ></input>
                                <input type='submit' onChange={console.log()} className='booking' value='Book Now'></input>
                            </form>
                            {insertId.insertedId && 
                                <div style={{width: '350px'}} class="alert mx-auto alert-success" role="alert">
                                    A simple success alert—check it out!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PackageDetails;