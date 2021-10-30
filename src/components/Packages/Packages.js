import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div>
            Packages: {packages.length}
            {
                packages.map(packages => 
                <div>
                    <button>Details</button>
                    <Link to='/Booking'>Book Now</Link>
                </div>)
            }
        </div>
    );
};

export default Packages;