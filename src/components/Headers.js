import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Headers.css'
const Headers = () => {

    return (
        <div className='d-flex justify-content-center mt-4'>
            <Nav className='nav mb-4  '>
                <Link to='/home'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
                <Link to='/About'>About</Link>
            </Nav>
        </div>
    );
};

export default Headers;