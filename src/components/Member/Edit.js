import React, { Fragment, useState } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index';

import { Card, Form, CloseButton, Button, Container, Row, Col } from "react-bootstrap";

export default function Edit() {
    const { members } = useSelector((state) => state.members);
    let { memberId } = useParams();
    memberId = parseInt(memberId);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { editMember, deleteMember } = bindActionCreators(actionCreators, dispatch);

    let selectedMember;

    try {
        selectedMember = members.filter(item => item.id === memberId)[0];
    } catch (error) {
        console.log(error);
        navigate('/');
    }

    const [name, setName] = useState(selectedMember.name);
    const [lastname, setLastname] = useState(selectedMember.lastname);
    const [email, setEmail] = useState(selectedMember.email);
    const [phone, setPhone] = useState(selectedMember.phone);
    const [role, setRole] = useState(selectedMember.role);

    const handleSubmit = (e) => {
        e.preventDefault();

        const member = { id: memberId, name, lastname, email, phone, role };
        editMember(member);
        navigate('/');
    }

    const handleDeleteSubmit = (e) => {
        e.preventDefault();

        deleteMember(memberId);
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
                    <br></br>
                    <Card.Title> <h2> Edit team member </h2> </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted" style={{ padding: '1rem' }}>Edit contact info, location and role</Card.Subtitle>
                    <Card.Text>
                        <Form>
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
                                value="regular"
                                checked={role === 'regular'}
                                onChange={(e) => setRole(e.target.value)}
                                required />
                            <Form.Check
                                type="radio"
                                label="Admin - Can delete members"
                                name="role"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={(e) => setRole(e.target.value)}
                                required />
                        </Form>

                        <br />

                        <Container>
                            <Row>
                                <Col>
                                    <Form onSubmit={handleDeleteSubmit}>
                                        <Button style={{ width: '10rem' }} type="submit" variant="outline-danger"> Delete </Button>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form onSubmit={handleSubmit}>
                                        <div style={{ textAlign: "right" }}>
                                            <Button style={{ width: '10rem' }} type="submit" variant="primary"> Save </Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}