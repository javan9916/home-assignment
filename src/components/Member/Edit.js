import React, { Fragment, useState } from 'react';

import { useParams, Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index';

import {
    Card, Form, CloseButton,
    Button, Container, Row,
    Col, ListGroup
} from 'react-bootstrap';
import '../styles.css';


/**
 * 
 * @description This view allows users to edit all the information from a team member
 * @returns a template to edit members of a team
 */
export default function Edit() {
    // Getting the members from redux store
    const { members } = useSelector((state) => state.members);

    // Importing the editMember and deleteMember functions from redux
    const dispatch = useDispatch();
    const { editMember, deleteMember } = bindActionCreators(actionCreators, dispatch);

    // Getting the memberId from path params
    let { memberId } = useParams();
    memberId = parseInt(memberId);

    const selectedMember = members.filter(item => item.id === memberId)[0];

    // Form handling states
    const [name, setName] = useState(selectedMember.name);
    const [lastname, setLastname] = useState(selectedMember.lastname);
    const [email, setEmail] = useState(selectedMember.email);
    const [phone, setPhone] = useState(selectedMember.phone);
    const [role, setRole] = useState(selectedMember.role);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Creating a new member object and sending it to edit an existing team member
        const member = { id: memberId, name, lastname, email, phone, role };
        editMember(member);
        navigate("/");
    }

    const handleDeleteSubmit = (e) => {
        e.preventDefault();

        // Sending memberId to delete an existing team member
        deleteMember(memberId);
        navigate("/");
    }

    return (
        <Fragment>
            <Card className="card">
                <Card.Body>
                    <Card.Header className="card-header">
                        <div className="close-button-container">
                            <Link to="/">
                                <CloseButton />
                            </Link>
                        </div>
                    </Card.Header>
                    <br></br>
                    <Card.Title> <h2> Edit team member </h2> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted card-subtitle">Edit contact info, location and role</Card.Subtitle>
                    <hr/>
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
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    label="Regular - Can't delete members"
                                    name="role"
                                    id="regular"
                                    value="regular"
                                    checked={role === "regular"}
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
                                    checked={role === "admin"}
                                    onChange={(e) => setRole(e.target.value)}
                                    required />
                            </ListGroup.Item>
                        </ListGroup>
                    </Form>

                    <br />

                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={handleDeleteSubmit}>
                                    <Button className="form-button" type="submit" variant="outline-danger"> Delete </Button>
                                </Form>
                            </Col>
                            <Col>
                                <Form onSubmit={handleSubmit}>
                                    <div className="right-button-container">
                                        <Button className="form-button" type="submit" variant="primary"> Save </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Fragment>
    )
}