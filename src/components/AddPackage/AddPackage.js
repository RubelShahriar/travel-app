import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import image from '../images/web-images-tert.jpeg'
import './AddPackage.css';

const AddPackage = () => {
    const imageRef= useRef();
    const placeRef= useRef();
    const nameRef= useRef();
    const amountRef= useRef();
    const handleAddPackage = e => {
        const image= imageRef.current.value;
        const place= placeRef.current.value;
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const packageInfo = {image, place, name, amount};
        fetch('https://ghostly-blood-77078.herokuapp.com/packages', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                <div class="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div>
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <>
            <h2 style={{color: '#2C3E50', marginTop: '40px'}}>Add a new package</h2>
            <Container>
                <div className='add' style={{display: 'grid', gridTemplateColumns: '1fr 1fr', margin: '60px 0', background: '#F7F9F9', borderRadius: '10px', padding: '60px 0'}}>
                    <div>
                        <img src={image} style={{height: '400px'}} className='w-75 rounded-3'  alt=''></img>
                    </div>
                    <div className='d-flex w-75 justify-content-center align-items-center' style={{background: '#f1f1f1', borderRadius: '10px'}}>
                        <form onSubmit={handleAddPackage}>
                            <input type="url" placeholder="Enter Image URL" ref={imageRef}></input>
                            <input type="text" placeholder="Enter Place" ref={placeRef}></input>
                            <input type="text" placeholder="Enter Name" ref={nameRef}></input>
                            <input type="text" placeholder="Enter Amount" ref={amountRef}></input>
                            <input type="submit" className='submit border-0 bg-warning rounded-2' value="Add Package"></input>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AddPackage;