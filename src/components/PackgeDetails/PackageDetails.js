import React, { useEffect, useRef, useState } from 'react';
import './PackageDetails.css';
import image from '../images/DetailsTwo.png';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';

const PackageDetails = () => {
    const [packageItem, setPackageItem] = useState({});
    const {user} = useAuth();
    const {id} = useParams();

    useEffect( () => {
        const url = `http://localhost:4000/packages/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPackageItem(data))
    },[])

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
        fetch('http://localhost:4000/orders', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Confirmed Successfully')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className='pacakge-details'>
                <h2>Place An Order </h2>
            <div className='background'>
            </div>
            <div className='details-flex'>
                <div className='left'>
                    <img src={packageItem.image} alt=''></img>
                    <p>place review: {packageItem.place}</p>
                    <h3>Package Name: <span>{packageItem.name}</span></h3>
                    <button className='may'>May its a greate value for you</button>
                </div>
                <div className='right'>
                    <h3>Book Your Package</h3>
                    <div>
                        <form onSubmit={handleDetailsForm}>
                        <input type="text" value={user.displayName}></input>
                        <input type="text" value={user.email}></input>
                        <input type="url" value={packageItem.image} ref={imageRef}></input>
                        <input type="text" value={packageItem.place} ref={placeRef}></input>
                        <input type="text" value={packageItem.name} ref={nameRef}></input>
                        <input type="text" value={packageItem.amount} ref={amountRef}></input>
                            <input type='submit' className='booking' value='Book Now'></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;