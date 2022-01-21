import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
            <div className='display'>
            {packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div>
                        <p>{packages.place}</p>
                        <h4>{packages.name}</h4>
                        <p>{packages.amount}</p>
                        <Link to={`/package-details/${packages._id}`}><button className='button'>Details</button></Link>
                    </div>
                </div>
                )}
            </div>
        </div>
        </Container>
    );
};

export default Packages;