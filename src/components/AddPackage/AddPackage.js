import React, { useRef } from 'react';

const AddPackage = () => {
    const nameRef= useRef();
    const emailRef= useRef();
    const imageRef= useRef();
    const handleAddPackage = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const image= imageRef.current.value;
        const packageInfo = {name, email, image};
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
                <input type="text" placeholder="Enter Package Place" ref={nameRef}></input>
                <input type="email" placeholder="Enter Package Name" ref={emailRef}></input>
                <input type="submit" value="Add Package"></input>
            </form>
        </div>
    );
};

export default AddPackage;