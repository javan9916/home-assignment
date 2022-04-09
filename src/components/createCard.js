import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index';

import { Card, CloseButton, Form, Button } from "react-bootstrap";

export default function CreateCard() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch();

    const { createUser } = bindActionCreators(actionCreators, dispatch)

    const handleSubmit = (e) => {
        e.preventDefault();

        const member = { name, lastname, email, phone, role }
        createUser(member);
    }

    return (
        <Fragment>
            <Card style={{ width: '80%', margin: '3rem' }}>
                <Card.Body>
                    <Card.Header style={{ display: 'flex', backgroundColor: 'white' }}>
                        <div style={{ marginLeft: "auto" }}>
                            <Link to="/">
                                <CloseButton />
                            </Link>
                        </div>
                    </Card.Header>
                    <br></br>
                    <Card.Title> <h2> Team members </h2> </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted" style={{ padding: '1rem' }}>Set email, location and role</Card.Subtitle>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <h4>Info</h4>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text" placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Control
                                    type="text" placeholder="Enter lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control
                                    type="email" placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Control
                                    type="text" placeholder="Enter phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required />
                            </Form.Group>

                            <h4>Role</h4>
                            <Form.Check
                                type="radio"
                                label="Regular - Can't delete members"
                                name="role"
                                id="regular"
                                value="regular"
                                onChange={(e) => setRole(e.target.value)}
                                required />
                            <Form.Check
                                type="radio"
                                label="Admin - Can delete members"
                                name="role"
                                id="admin"
                                value="admin"
                                onChange={(e) => setRole(e.target.value)}
                                required />

                            <div style={{ textAlign: "right" }}>
                                <Button style={{ width: '10rem' }} type="submit" variant="primary"> Save </Button>
                            </div>
                            {role}
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
}