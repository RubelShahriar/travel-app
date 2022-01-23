import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://ghostly-blood-77078.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <Container>
            <div className='packages'>
            <h2 className='my-5 fs-1'>Our Populer Packages</h2>
            {!packages.length ?
                <div className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="grow" variant='warning' />
                </div> :
                <div className='display'>
                    {packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div>
                        <p className='mt-1'>{packages.place}</p>
                        <h4>{packages.name}</h4>
                        <p>{`$${packages.amount}`}</p>
                        <Link to={`/package-details/${packages._id}`}><Button variant='warning' className='rounded-pill px-4'>Details</Button></Link>
                    </div>
                </div>
                )}
                </div>
                }
            </div>
        </Container>
    );
};

export default Packages;