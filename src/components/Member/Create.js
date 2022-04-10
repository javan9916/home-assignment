import React, { Fragment, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index';

import { Card, CloseButton, Form, Button, ListGroup } from "react-bootstrap";

export default function Create() {
    const { members } = useSelector((state) => state.members);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('regular');

    const dispatch = useDispatch();

    const { addMember } = bindActionCreators(actionCreators, dispatch)

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = members.length + 1;

        const member = { id, name, lastname, email, phone, role }
        addMember(member);

        navigate('/');
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
                    <br/>
                    <Card.Title> <h2> Add a team member </h2> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ padding: '0.5rem' }}>Set email, location and role</Card.Subtitle>
                    <hr/>
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
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Form.Check
                                        type="radio"
                                        label="Regular - Can't delete members"
                                        name="role"
                                        id="regular"
                                        value="regular"
                                        checked={role === 'regular'}
                                        onChange={(e) => setRole(e.target.value)}
                                        required />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Check
                                        type="radio"
                                        label="Admin - Can delete members"
                                        name="role"
                                        id="admin"
                                        value="admin"
                                        checked={role === 'admin'}
                                        onChange={(e) => setRole(e.target.value)}
                                        required />
                                </ListGroup.Item>
                            </ListGroup>

                            <br/>
                            <div style={{ textAlign: "right" }}>
                                <Button style={{ width: '10rem' }} type="submit" variant="primary"> Save </Button>
                            </div>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
}