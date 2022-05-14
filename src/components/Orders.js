import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                }
                return res.json()
            })
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])
    return (
        <div>
            <h2>This is from orders! : {orders.length}</h2>
        </div>
    );
};

export default Orders;