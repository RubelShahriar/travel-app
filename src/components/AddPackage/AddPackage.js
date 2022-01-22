import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import image from '../images/web-images-tert.jpeg'
import './AddPackage.css';

const AddPackage = () => {
    const [id, setId] = useState('')
    const imageRef= useRef();
    const placeRef= useRef();
    const nameRef= useRef();
    const amountRef= useRef();
    const descRef  = useRef()
    const handleAddPackage = e => {
        const image= imageRef.current.value;
        const place= placeRef.current.value;
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const description = descRef.current.value;
        const packageInfo = {image, place, name, amount, description};
        fetch('https://ghostly-blood-77078.herokuapp.com/packages', { 
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            setId(data)
            if(data.insertedId){
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
                        <img src={image} style={{height: '500px'}} className='w-75 rounded-3'  alt=''></img>
                    </div>
                    <div className='d-flex w-75  justify-content-center align-items-center' style={{background: '#f1f1f1', borderRadius: '10px'}}>
                        <form onSubmit={handleAddPackage}>
                            <input type="url" placeholder="Enter Image URL" ref={imageRef} required></input>
                            <input type="text" placeholder="Enter Place" ref={placeRef} required></input>
                            <input type="text" placeholder="Enter Name" ref={nameRef} required></input>
                            <input type="text" placeholder="Enter Amount" ref={amountRef} required></input>
                            <input type="text" placeholder="Enter Description" ref={descRef} required></input>
                            <input type="submit" className='submit border-0 bg-warning rounded-2 mb-0' value="Add Package"></input>
                        </form>
                    </div>
                    {/* <div></div>
                            {id.insertedId && 
                                <div class="alert alert-success w-75" role="alert">
                                    A simple success alert—check it out!
                                </div>
                            } */}
                    </div>
            </Container>
        </>
    );
};

export default AddPackage;