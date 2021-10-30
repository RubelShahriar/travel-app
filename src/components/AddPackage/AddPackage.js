import React, { useRef } from 'react';

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
        fetch('http://localhost:4000/packages', {
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Package Added Successfully')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add Package</h2>
            <form onSubmit={handleAddPackage}>
                <input type="url" placeholder="Enter Image URL" ref={imageRef}></input>
                <input type="text" placeholder="Enter Place" ref={placeRef}></input>
                <input type="text" placeholder="Enter Name" ref={nameRef}></input>
                <input type="text" placeholder="Enter Amount" ref={amountRef}></input>
                <input type="submit" value="Add Package"></input>
            </form>
        </div>
    );
};

export default AddPackage;