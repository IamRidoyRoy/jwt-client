import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const handleFormValue = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        console.log(email, pass);

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, pass })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/orders')
                }
                console.log(data);
            })
    }
    return (
        <div className='container w-50'>
            <Form onSubmit={handleFormValue}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='pass' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;