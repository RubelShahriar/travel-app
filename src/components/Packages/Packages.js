import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div className='packages'>
            Packages: {packages.length}
            <div className='display'>
            {
                packages.map(packages => 
                <div className='item'>
                    <div className='image'>
                        <img src={packages.image} alt=''></img>
                    </div>
                    <div>
                        <p>{packages.place}</p>
                        <h4>{packages.name}</h4>
                        <p>{packages.amount}</p>
                        <Link to={`/package-details/${packages._id}`}><button>Details</button></Link>
                    </div>
                </div>) 
            }
            </div>
        </div>
    );
};

export default Packages;